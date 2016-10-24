# indexdotco-js
JS for Index.co embeds in external sites

![showcase](http://i.imgur.com/JSRPtqa.png "How it works")

## Usage
Get the last `indexdotco.js` [release](https://github.com/thenextweb/indexdotco-js/releases) on your site. Then use either of the following:

Icon with hover functionality. `<a href='https://index.co/company/indexdotco' target='_blank' class='idc-hasIcon'></a>`

A single company widget `<a href='https://index.co/company/indexdotco' target='_blank' class='idc-hasCard'></a>`

A single company widget, in dark mode `<a href='https://index.co/company/indexdotco' target='_blank' class='idc-hasCard idc-hasCard--dark'></a>`

Embed all companies from a list `<a href='https://index.co/list/13297-tech-giants' target='_blank' class='idc-hasList'></a>`

## Advanced Usage
You can add options by creating an `indexDotCoSettings` object on your site
```
window.indexDotCoSettings = {
	delay: true /*wont scan for elements on page load*/
};
```

You can import `indexdotco.js` as a cjs module on your existing codebase.

```
var Index = require('indexdotco');
var index = new Index(options);
```

You can use `IndexDotCo.attach()` to rescan the DOM at any time.

You can use your own site's css to customize the size, colors and fonts of the cards inside

### Rebuilding the code
Use `gulp` with no arguments to build `dist/indexdotco-dev.js` uncompressed, along with its sourcemap. Webpack will keep on watching for any changes on the code.

Use `gulp make` to build `dist/indexdotco.js`, `gulp test` to check if everything went okay

Test your changes opening `test/basic.html` in your browser. Append `#local` to the url to test changes in `dist/indexdotco-dev.js`

![Build status](https://codeship.com/projects/d03f8690-3582-0134-2b99-4648c3cd6a7f/status?branch=master)
