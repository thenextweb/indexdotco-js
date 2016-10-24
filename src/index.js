import config from 'config';
import css from './css/base.css';
import loadJQuery from './tool/loadJQuery';

import attach from './attach.js';

function startAndGetApi(settings){

	if(!settings) {
		if(window.indexDotCoSettings) {
			settings = window.indexDotCoSettings;
		}
		else {
			settings = {};
		}
	}

	let cssTag = window.document.createElement("style");
	cssTag.type = "text/css";
	cssTag.innerHTML= css;

	const api = {
		'attach': function(){
			this.event.trigger('significantDomChange');
		},
		'info' : {
			version: config.appVersion
		},
		'event' : {
			'trigger': function(ev) {
				if(ev === 'significantDomChange') {
					window.document.body.dispatchEvent((new window.Event(config.prefix+'significantDomChange')));
				}
			}
		}
	}

	document.body.addEventListener(config.prefix+'significantDomChange',function(){
		loadJQuery(function(){
			window.jQuery(function(){
				attach(['icon','card','list','hoverable']);
			});
		});
	})

	if(!settings.disableCss) window.document.body.appendChild(cssTag);
	if(!settings.delay) api.attach();

	return api;

}

module.exports = startAndGetApi;
