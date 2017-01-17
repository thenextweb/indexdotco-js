export default function(settings) {

	return new Promise(function(resolve, reject){

		if(window.jQuery) {
			resolve();
		}
		else {

		    var script = document.createElement("script")
		    script.type = "text/javascript";

		    if (script.readyState){  //IE
		        script.onreadystatechange = function(){
		            if (script.readyState == "loaded" ||
		                    script.readyState == "complete"){
		                script.onreadystatechange = null;
		                resolve();
		            }
		        };
		    } else {  //Others
		        script.onload = function(){
		            resolve();
		        };
		    }

		    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js';
		    document.getElementsByTagName("head")[0].appendChild(script);
		}

	});

};
