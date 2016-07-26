# indexdotco-js
JS for Index.co embeds in external sites


## Usage
Just add `dist/indexdotco.js` to your site.
Then you can build links to Index.co with the html class `.idc-hasCard` or `.idc-hasIcon`, they'll become inline cards or hovercards


### Rebuilding the code
Use `gulp` with no arguments to build `dist/indexdotco-dev.js` uncompressed, along with its sourcemap. Webpack will keep on watching for any changes on the code.

Use `gulp make` to build `dist/indexdotco.js`
