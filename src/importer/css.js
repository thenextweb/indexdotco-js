import css from '../template/base.css';

export default function(settings) {
	return new Promise(function(resolve, reject){
		let cssTag = window.document.createElement("style");
		cssTag.type = "text/css";
		cssTag.innerHTML= css;
		if(!settings.disableCss) window.document.body.appendChild(cssTag);
		resolve();
	});
};
