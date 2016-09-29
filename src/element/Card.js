import config from 'config';
import AbstractElement from './AbstractElement';

import mustache from 'mustache/mustache.js';
import template from './../template/card.mustache';

export default class Card extends AbstractElement {

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

		return $element;

	}

}
