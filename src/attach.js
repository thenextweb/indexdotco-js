import config from 'config';
import Card from 'element/Card';

/*todo: refactor this into smaller files, leave just the attacher*/

var prefix = config.prefix;
var cardPrefix = config.cardPrefix;
var version = config.version;
var endpoint = config.endpoint;




var Hovercard = function(params) {

	var self = this;

	var calculateShouldClose = function(){
		var calculateDistance = function(elem, mouseX, mouseY) {
			return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
		};

		var tout;
		var mouseOrigin = 0;
		var $element = self.getElement();

		$(document).on('mousemove.popoverCloser',function(ev) {
			var distance = calculateDistance($element, ev.pageX, ev.pageY);
			distance = Math.round(distance/5)
			if(mouseOrigin === 0){
				mouseOrigin = distance;
			} else {
				if(mouseOrigin-distance < -4 && !$element.is($(ev.target)) && !$element.has($(ev.target)).length > 0 ){
					tout = setTimeout(function(){
						self.remove();
					},100);
				}
			}
		});
		$element.on('mouseenter.popoverCloser',function(ev){
			try{clearTimeout(tout);}catch(e){}
		})
		$element.on('mouseleave.popoverCloser',function(ev){
			tout = setTimeout(function(){
				self.remove();
			},300);
		});

	}

	var $el = $('<div></div>').attr('class',prefix+'hovercard');

	$el.html(params.html);
	self.place = function(){
		$el.css({
			visibility:'hidden'
		});
		$('body').append($el);
		$el.css({
			top: params.top - $el.outerHeight() - 5,
			left: params.left - ($el.outerWidth()/2),
			visibility:'visible'
		});
		$el.addClass(prefix+'hovercard--in');
		$el.one('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd',function(){
			$el.removeClass(prefix+'hovercard--in');
		})
		calculateShouldClose();
	}
	self.remove = function(){
		$el.addClass(prefix+'hovercard--out');
		$el.one('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd',function(){
			$el.remove();
			self._onClosecallback();
		})
	}
	self.getElement = function(){
		return $el;
	}
	self._onClosecallback = function(){};
	self.onClose = function(callback){
		self._onClosecallback = callback;
	}
	return self;

}




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
			console.error('[index hovercards] http error ('+error+') loading hovercard for "'+company+'" at endpoint "'+url+'"');
		}
	})

	return rq;

}



var attachCard = function($element) {

	var parsedElement = parseElement($element);
	var company = parsedElement.company;
	var rq = requestCardData(parsedElement.company);

	var $card = $('<div></div>').addClass(prefix+'cardStandalone')
	$element.replaceWith($card)

	rq.done(function(data){
		try {
			let card = new Card(data,{actionable:true});
			$card.append(card.domElement);
		} catch(error){
			console.error('[index hovercards] parsing error ('+error+') loading hovercard for "'+company+'" at endpoint "'+url+'"');
		}
	})

}




var attachIcon = function($element) {

	var parsedElement = parseElement($element);
	var company = parsedElement.company;
	var rq = requestCardData(parsedElement.company);
	var hovercard;

	$element.attr('target', '_blank').attr('href', parsedElement.href + '?utm_source=thenextweb.com&utm_medium=referral&utm_campaign=hover-'+company);
		$element.on('mouseover',function(ev){
			if(!$element.data(prefix+'hasIndexPopover') === true) {
				$element.data(prefix+'hasIndexPopover',true);
				rq.done(function(data){
					try {
						let card = new Card(data);
						hovercard = new Hovercard({
							html: card.domElement,
							top: $element.offset().top,
							left: $element.offset().left + ($element.outerWidth() / 2)
						});
						hovercard.onClose(function(){
							$element.data(prefix+'hasIndexPopover',false);
						});
						hovercard.place();
					} catch(error){
						console.error('[index hovercards] parsing error ('+error+') loading hovercard for "'+company+'" at endpoint "'+url+'"');
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
