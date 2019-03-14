export default function($element) {

	var parser = document.createElement('a');
	parser.href = $element.attr('href');

	// handle both /company/google and /list/1234-slug-goes-here
	return {
		entity: parser.pathname.split('/')[2].split('-')[0],
		qs: parser.href.indexOf('?') > -1 ? parser.href.split('?')[1] : '',
		href: parser.href
	};

}
