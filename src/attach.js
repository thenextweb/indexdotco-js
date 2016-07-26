import config from 'config';
import Card from 'element/Card';
import Popover from 'element/Popover';

/*todo: refactor this into smaller files, leave just the attacher*/

var prefix = config.prefix;
var cardPrefix = config.cardPrefix;
var version = config.version;
var endpoint = config.endpoint;




var parseElement = function($element) {

	var parser = document.createElement('a');
	parser.href = $element.attr('href');

	return {
		company: parser.pathname.split('/')[2],
		href: parser.href
	};

}



var requestCardData = function(company) {

	var url = endpoint+'company/'+company+'?version='+version;
	var rq = $.ajax({
		dataType: "json",
		type: 'GET',
		url: url
	});

	rq.fail(function(xhr,error){
		if(error !== 'abort'){
			console.error('[index Popovers] http error ('+error+') loading Popover for "'+company+'" at endpoint "'+url+'"');
		}
	})

	return rq;

}



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
	var company = parsedElement.company;
	var rq = requestCardData(parsedElement.company);

	$element.attr('target', '_blank').attr('href', parsedElement.href + '?utm_source=thenextweb.com&utm_medium=referral&utm_campaign=hover-'+company);
		$element.on('mouseover',function(ev){
			if(!$element.data(prefix+'hasIndexPopover') === true) {
				$element.data(prefix+'hasIndexPopover',true);
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
							$element.data(prefix+'hasIndexPopover',false);
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
				$element.data(prefix+'hasIndexPopover',false);
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
