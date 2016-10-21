import css from './css/base.css';
import loadJQuery from './tool/loadJQuery';

import attach from './attach.js';

let cssTag = document.createElement("style");
cssTag.type = "text/css";
cssTag.innerHTML= css;

loadJQuery(function(){
	window.jQuery(function(){
		document.body.appendChild(cssTag);
		attach(['icon','card','list','hoverable']);
	});
})
