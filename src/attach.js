import config from 'config';
import Card from 'element/Card';
import Popover from 'element/Popover';

import parseElement from 'tool/parseElement';
import requestCardData from 'tool/requestCardData';


var elementCreated = new Event(config.prefix+'elementCreated',{bubbles:true});
var popoverCreated = new Event(config.prefix+'popoverCreated',{bubbles:true});


var attachCard = function($element) {

	var parsedElement = parseElement($element);
	var rq = requestCardData(parsedElement.company);
	var $card = $('<div></div>').addClass(config.prefix+'cardStandalone')

	$element.replaceWith($card);
	$element = $card;

	rq.done(function(data){
		try {
			let card = new Card({
				data:data,
				actionable:true
			});
			$card.append(card.domElement);
			$element[0].dispatchEvent(elementCreated);
		} catch(error){
			console.error(`[index] error building card for ${parsedElement.company}`);
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
					$element[0].dispatchEvent(elementCreated);
				} catch(error){
					console.error(error);
					console.error(`[index] error building popover for ${parsedElement.company}`);
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

	$element[0].dispatchEvent(popoverCreated);

	if (typeof window.callPhantom === 'function') {
		$element.trigger('mouseover');
	}

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
			$('a.'+config.prefix+'hasIcon').each(
				function(){
					attachIcon($(this))
				}
			);
		}
		else if(type === 'card') {
			$('a.'+config.prefix+'hasCard').each(
				function(){
					attachCard($(this))
				}
			);
		}
		else {
			throw `Invalid object type (${type})`;
		}
	}

}

export default attach;
