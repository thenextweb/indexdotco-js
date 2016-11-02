import config from 'config';

export default class AbstractElement {

	get domElement(){
		return this.$element;
	}

	get domElementRaw() {
		return this.$element[0];
	}

	on(event,callback){
		this.$element.on('internal-'+config.prefix+event,callback);
	}

	trigger(event,data){
		this.$element.trigger('internal-'+config.prefix+event,data);
	}

	makeElement(params) {
		return window.jQuery('<div></div>');
	}

	place($location) {
		if(!$location) $location = window.jQuery('body');
		$location.append(this.domElement);
	}

	constructor(params){
		if(!params) {
			var params = {};
		}
		this.$element = this.makeElement(params);
	}

}
