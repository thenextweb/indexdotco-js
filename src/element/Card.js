import config from 'config';
import AbstractElement from './AbstractElement';

export default class Card extends AbstractElement {

	makeElement(params) {

		let data = params.data;
		if(!data || !data.profile || !data.info) {
			throw 'BAD_STRUCTURE';
		}

		var $header = $('<a></a>')
		$header.addClass(config.cardPrefix+'header');
		$header.attr('href',data.profile.index_url)
		$header.append($('<img></img>').attr({
			'src': data.profile.avatar,
			'class': config.cardPrefix+'header-avatar'
		}));
		$header.append($('<h2></h2>').attr({
			'class': config.cardPrefix+'header-title'
		}).text(data.profile.name));

		var $headerTags = $('<ul></ul>').attr({
			'class': config.cardPrefix+'header-tags'
		})
		if(data.info.market) {
			$headerTags.append($('<li></li>').text(data.info.market));
		}
		if(data.info.country) {
			$headerTags.append($('<li></li>').text(data.info.country));
		}

		$header.append($headerTags);

		var $facts = $('<div></div>').addClass(config.cardPrefix+'facts');
		var $factsTags = $('<ul></ul>').attr({
			'class': config.cardPrefix+'facts-tags'
		});
		if(data.info.founded) {
			$factsTags.append($('<li></li>').text('Founded in ' + data.info.founded));
		}
		if(data.info.raised) {
			$factsTags.append($('<li></li>').text('Raised ' + data.info.raised));
		}
		if(data.info.employees){
			$factsTags.append($('<li></li>').text(data.info.employees + ' employees'));
		}
		$facts.append($factsTags);

		var $footer = $('<a></a>');
		$footer.addClass(config.cardPrefix+'footer');
		$footer.attr('href',data.profile.index_url);

		if(params.actionable){
			$footer.html('<p>View this company on index</p>');
		}
		else {
			$footer.html('<p>Click the icon below to view profile</p>');
		}

		let $element = $('<div></div>').addClass(config.prefix+'card').append($header).append($facts).append($footer);

		if(params.actionable){
			$element.addClass(config.prefix+'card--actionable');
		}

		return $element;

	}

}
