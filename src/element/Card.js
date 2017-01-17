import config from 'config';
import AbstractElement from './AbstractElement';

import mustache from 'mustache/mustache.js';
import template from './../template/card.mustache';

export default class Card extends AbstractElement {

	place($location) {

		super.place($location);
		const self = this;
		const $element = self.$element;
		const data = self._data;
		const settings = self._settings;

		const taglineTextAsArray = data.profile.tagline.split(' ');
		const $taglineTextDiv = $element.find('.'+config.cardPrefix+'tagline-text');

		let lines = 0;
		let lastHeight = 0;
		let words;
		for(words = 0;words < taglineTextAsArray.length; words++){
			$taglineTextDiv.text(taglineTextAsArray.slice(0,words).join(' ')+'…');
			if($taglineTextDiv[0].offsetHeight > lastHeight) {
				lines++;
				lastHeight = $taglineTextDiv[0].offsetHeight;
			}
			if(lines > settings.maxLines) {
				words = words -1;
				break;
			}
		}
		var taglineTextAsArrayTrimmed = taglineTextAsArray.slice(0,words);
		$taglineTextDiv.text(taglineTextAsArrayTrimmed.join(' '));
		if(taglineTextAsArrayTrimmed.length < taglineTextAsArray.length) {
			$taglineTextDiv.append('<span>…</span>');
		}

	}


	makeElement(params) {

		let data = params.data;
		if(!data || !data.profile || !data.info) {
			throw 'BAD_STRUCTURE';
		}

		let $element = mustache.render(
			template,
			{
				data: data,
				config: config,
				params: params
			}
		);

		this._data = data;
		this._settings = params.settings?params.settings:{};

		return $($element);

	}

}
