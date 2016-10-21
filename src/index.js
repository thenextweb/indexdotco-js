import config from 'config';
import css from './css/base.css';
import loadJQuery from './tool/loadJQuery';

import attach from './attach.js';

let cssTag = document.createElement("style");
cssTag.type = "text/css";
cssTag.innerHTML= css;

document.body.addEventListener(config.prefix+'significantDomChange',function(){
	attach(['icon','card','list','hoverable']);
})

loadJQuery(function(){
	window.jQuery(function(){
		document.body.appendChild(cssTag);
		document.body.dispatchEvent((new Event(config.prefix+'significantDomChange')));
	});
})
