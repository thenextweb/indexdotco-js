import config from 'config';
import makeDefault from './tool/makeDefault';
import importer from  './importer.js';
import attach from './attach.js';

import documentReady from 'document-ready-promise';

function startAndGetApi(settings){

	if(!settings) {
		settings = window.indexDotCoSettings ? window.indexDotCoSettings : {};
	}
	try {
		settings = makeDefault(settings,config.defaults);
	} catch (e) {
		console.error(e);
		settings = config.defaults;
	}

	const importAssets = importer.importAssets(settings);
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
		documentReady()
		.then(function(){
			return importAssets;
		}).then(function(){
			attach(['icon','card','list','hoverable'],settings);
		});
	})

	if(!settings.delay) api.attach();

	return api;

}

module.exports = startAndGetApi;
