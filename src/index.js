import css from './css/base.css';
import loadJQuery from './tool/loadJQuery';

import attach from './attach.js';

let cssTag = document.createElement("style");
cssTag.type = "text/css";
cssTag.innerHTML= css;
document.body.appendChild(cssTag);

loadJQuery(function(){
	$(function(){
		attach(['icon','card','list']);
	});
})
