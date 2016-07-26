import config from 'config';
import Card from 'element/Card';
import Popover from 'element/Popover';

import parseElement from 'tool/parseElement';
import requestCardData from 'tool/requestCardData';


var attachCard = function($element) {

	var parsedElement = parseElement($element);
	var rq = requestCardData(parsedElement.company);
	var $card = $('<div></div>').addClass(config.prefix+'cardStandalone')

	$element.replaceWith($card)

	rq.done(function(data){
		try {
			let card = new Card({
				data:data,
				actionable:true
			});
			$card.append(card.domElement);
		} catch(error){
			if(error === 'BAD_STRUCTURE') {
				console.error(`[index Popovers] parsing error loading Card for ${parsedElement.company}`)
			}
			else {
				throw error;
			}
		}
	})

}




var attachIcon = function($element) {

	var parsedElement = parseElement($element);
	var rq = requestCardData(parsedElement.company);

	$element.attr('target', '_blank').attr({
		'href': parsedElement.href + '?utm_source=thenextweb.com&utm_medium=referral&utm_campaign=hover-'+parsedElement.company
	});

	$element.on('mouseover',function(ev){
		if(!$element.data(config.prefix+'hasIndexPopover') === true) {
			$element.data(config.prefix+'hasIndexPopover',true);
			rq.done(function(data){
				try {
					let card = new Card({
						data: data
					});
					let popover = new Popover({
						html: card.domElement,
						top: $element.offset().top,
						left: $element.offset().left + ($element.outerWidth() / 2)
					});
					popover.on('close',function(){
						$element.data(config.prefix+'hasIndexPopover',false);
					});
					popover.place();
				} catch(error){
					if(error === 'BAD_STRUCTURE') {
						console.error(`[index Popovers] parsing error loading Popover for ${parsedElement.company}`)
					}
					else {
						throw error;
					}
				}
			})
		}
	});
	$element.on('mouseout',function(ev){
		if(rq.state() !== 'resolved'){
			$element.data(config.prefix+'hasIndexPopover',false);
			rq.abort();
		}
	});

};




const attach = function(typeOrTypes) {

	if(typeof typeOrTypes === 'object') {
		typeOrTypes.map(function(type){
			attach(type);
		})
	}
	else {
		let type = typeOrTypes;
		if(type === 'icon') {
			$('a.'+config.prefix+'hasIcon').each(function(){attachIcon($(this))});
		}
		else if(type === 'card') {
			$('a.'+config.prefix+'hasCard').each(function(){attachCard($(this))});
		}
		else {
			throw `Invalid object type (${type})`;
		}
	}

}

export default attach;
