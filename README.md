# indexdotco-js
JS for Index.co embeds in external sites

[Download it here](https://github.com/thenextweb/indexdotco-js/releases)

!(http://i.imgur.com/XohvVWZ.gif "How it works")

## Usage
Get the last `indexdotco.js` [release](https://github.com/thenextweb/indexdotco-js/releases)
on your site. Then use either of the following:

* Icon with hover functionality.
  `<a href='https://index.co/company/indexdotco' target='_blank' class='idc-hasIcon'></a>`
* A single company widget
  `<a href='https://index.co/company/indexdotco' target='_blank' class='idc-hasCard'></a>`
* A single company widget, in dark mode
  `<a href='https://index.co/company/indexdotco' target='_blank' class='idc-hasCard idc-hasCard--dark'></a>`
* Embed all companies from a list
  `<a href='https://index.co/list/13297-tech-giants' target='_blank' class='idc-hasList'></a>`


## Customization
You can use your own site's css to customize the size, colors and fonts of the
cards inside, there's some very basic css bundled directly with this module
but final tweaks are up to you!


## Advanced Usage
### Options
You can add options by creating an `indexDotCoSettings` object on your site
```
window.indexDotCoSettings = {
	delay: true
	/* won't scan for elements on page load */
	disableCss: true,
	/* won't append any custom css, you'll have to provide your own
	   or import template/base.css via other means */
	maxLines: 6
	/* max number of text lines on cards */
};
```

### Ajax loading
If you are loading new content using ajax, use `IndexDotCo.attach()` to rescan
the DOM at any time and draw any new cards


### Webpack + babel
If you are using webpack and babel you can instead import `indexdotco-js` as a
module on your existing codebase.

(It's even on npm! just do `npm install indexdotco-js`)

This won't create any global objects on `window`, you can instead pass
arguments to the constructor and then use the `IndexDotCo` class,
it exposes the same methods.
```
var IndexDotCoConstructor = require('indexdotco-js');
var IndexDotCo = new IndexDotCoConstructor(settings);
```


## Building the code yourself
Use `gulp` with no arguments to build `dist/indexdotco-dev.js` uncompressed,
along with its sourcemap. Webpack will keep on watching for any changes on the code.

Use `gulp make` to build `dist/indexdotco.js`, `gulp test` to check if
everything went okay

Test your changes opening `test/basic.html` in your browser. Append `#local` to
the url to test changes in `dist/indexdotco-dev.js`


![Build status](https://codeship.com/projects/d03f8690-3582-0134-2b99-4648c3cd6a7f/status?branch=master)
