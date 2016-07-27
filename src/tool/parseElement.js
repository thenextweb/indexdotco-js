export default function($element) {

	var parser = document.createElement('a');
	parser.href = $element.attr('href');

	// handle both /company/google and /list/1234-slug-goes-here
	return {
		entity: parser.pathname.split('/')[2].split('-')[0],
		href: parser.href
	};

}
