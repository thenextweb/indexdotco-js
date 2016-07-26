export default function($element) {

	var parser = document.createElement('a');
	parser.href = $element.attr('href');

	return {
		company: parser.pathname.split('/')[2],
		href: parser.href
	};

}
