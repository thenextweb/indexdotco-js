import config from 'config';
import AbstractElement from './AbstractElement';

export default class Card extends AbstractElement {

	makeElement(params) {

		let data = params.data;
		if(!data || !data.profile || !data.info) {
			throw 'BAD_STRUCTURE';
		}

		var $header = window.jQuery('<a></a>')
		$header.addClass(config.cardPrefix+'header');
		$header.attr('href',data.profile.index_url)
		$header.append(window.jQuery('<img></img>').attr({
			'src': data.profile.avatar,
			'class': config.cardPrefix+'header-avatar'
		}));

		var $headerMeta = window.jQuery('<div></div>').addClass(config.cardPrefix+'header-meta');
		$header.append($headerMeta);

		$headerMeta.append(window.jQuery('<h2></h2>').attr({
			'class': config.cardPrefix+'header-title'
		}).text(data.profile.name));

		var $headerTags = window.jQuery('<ul></ul>').attr({
			'class': config.cardPrefix+'header-tags'
		})
		if(data.info.markets) {
			data.info.markets.map(function(market){
				$headerTags.append(window.jQuery('<li></li>').text(market));
			})
		}
		if(data.info.country) {
			$headerTags.append(window.jQuery('<li></li>').text(data.info.country));
		}
		$headerMeta.append($headerTags);

		var $tagline = window.jQuery('<div></div>').addClass(config.cardPrefix+'tagline');
		if(data.profile.tagline) {
			$tagline.text(data.profile.tagline);
		}

		var $expando = window.jQuery('<div></div>').addClass(config.cardPrefix+'expando');

		var $facts = window.jQuery('<div></div>').addClass(config.cardPrefix+'facts');
		var $factsTags = window.jQuery('<ul></ul>').attr({
			'class': config.cardPrefix+'facts-tags'
		});
		if(data.info.founded) {
			$factsTags.append(window.jQuery('<li></li>').text('Founded in ' + data.info.founded));
		}
		if(data.info.raised) {
			$factsTags.append(window.jQuery('<li></li>').text('Raised ' + data.info.raised));
		}
		if(data.info.employees){
			$factsTags.append(window.jQuery('<li></li>').text(data.info.employees + ' employees'));
		}
		$facts.append($factsTags);

		var $footer = window.jQuery('<a></a>');
		$footer.addClass(config.cardPrefix+'footer');
		$footer.attr('href',data.profile.index_url);

		if(params.actionable){
			$footer.html('<p>View this company on index</p>');
		}
		else {
			$footer.html('<p>Click the icon below to view profile</p>');
		}

		let $element =
			window.jQuery('<div></div>').addClass(config.prefix+'card')
			.append($header).append($tagline).append($facts).append($expando).append($footer);

		if(params.actionable){
			$element.addClass(config.prefix+'card--actionable');
		}

		return $element;

	}

}
