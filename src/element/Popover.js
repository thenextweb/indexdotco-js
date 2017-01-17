import config from 'config';
import AbstractElement from './AbstractElement';

export default class Popover extends AbstractElement {


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
		self.$element.css({
			visibility:'hidden'
		});
		super.place();
		self.$element.css({
			top: this.position.top - self.$element.outerHeight() - 5,
			left: this.position.left - (self.$element.outerWidth()/2),
			visibility:'visible'
		});
		self.$element.addClass(config.prefix+'popover--in');
		self.$element.one('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd',function(){
			self.$element.removeClass(config.prefix+'popover--in');
		})
		self.$element[0].addEventListener('mouseleave',function(ev){
			self.remove();
		});
		self.origin.addEventListener('mouseleave',function(ev){
			self.remove();
		});

	}


	makeElement(params){

		let $popover = window.jQuery('<div></div>')

		this.position = {
			top: params.top,
			left: params.left
		};

		this.origin = params.origin;

		$popover.attr('class',config.prefix+'popover');
		if(params.element) {
			params.element.place($popover);
		}
		else {
			$popover.html(params.html);
		}
		return $popover;

	}
}
