# indexdotco-js
JS for Index.co embeds in external sites

![showcase](https://github.com/thenextweb/indexdotco-js/blob/master/cover.png "How it works")

## Usage
Just add `dist/indexdotco.js` to your site. Then use either of the following:

Icon with hover functionality. `<a href='https://index.co/company/indexdotco' target='_blank' class='idc-hasIcon'></a>`

A single company widget `<a href='https://index.co/company/indexdotco' target='_blank' class='idc-hasCard'></a>`

Embed all companies from a list `<a href='https://index.co/list/13297-tech-giants' target='_blank' class='idc-hasList'></a>`

### Rebuilding the code
Use `gulp` with no arguments to build `dist/indexdotco-dev.js` uncompressed, along with its sourcemap. Webpack will keep on watching for any changes on the code.

Use `gulp make` to build `dist/indexdotco.js`, `gulp test` to check if everything went okay

![Build status](https://codeship.com/projects/d03f8690-3582-0134-2b99-4648c3cd6a7f/status?branch=master)
