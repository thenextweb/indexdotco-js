import config from 'config';
import AbstractElement from './AbstractElement';

export default class Popover extends AbstractElement {

	calculateShouldClose(){

		var self = this;
		var calculateDistance = function(elem, mouseX, mouseY) {
			return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
		};

		var tout;
		var mouseOrigin = 0;
		var $element = self.$element;

		window.jQuery(document).on('mousemove.popoverCloser',function(ev) {
			var distance = calculateDistance($element, ev.pageX, ev.pageY);
			distance = Math.round(distance/5)
			if(mouseOrigin === 0){
				mouseOrigin = distance;
			} else {
				if(mouseOrigin-distance < -4 && !$element.is(window.jQuery(ev.target)) && !$element.has(window.jQuery(ev.target)).length > 0 ){
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


	remove(){

		let self = this;
		this.$element.addClass(config.prefix+'popover--out');
		this.$element.one('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd',function(){
			self.trigger('close');
			self.$element.remove();
		})

	}


	place(){

		let self = this;
		self.domElement.css({
			visibility:'hidden'
		});
		super.place();
		self.domElement.css({
			top: this.position.top - self.domElement.outerHeight() - 5,
			left: this.position.left - (self.domElement.outerWidth()/2),
			visibility:'visible'
		});
		self.domElement.addClass(config.prefix+'popover--in');
		self.domElement.one('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd',function(){
			self.domElement.removeClass(config.prefix+'popover--in');
		})
		self.calculateShouldClose();

	}


	makeElement(params){

		let $popover = window.jQuery('<div></div>')

		this.position = {
			top: params.top,
			left: params.left
		};

		$popover.attr('class',config.prefix+'popover');
		$popover.html(params.html);
		return $popover;

	}
}
