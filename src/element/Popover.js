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
		self.domElementRaw.addEventListener('mouseleave',function(ev){
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
		$popover.html(params.html);
		return $popover;

	}
}
