export default function(callback){

	if(window.jQuery) {
		callback();
	}
	else {

	    var script = document.createElement("script")
	    script.type = "text/javascript";

	    if (script.readyState){  //IE
	        script.onreadystatechange = function(){
	            if (script.readyState == "loaded" ||
	                    script.readyState == "complete"){
	                script.onreadystatechange = null;
	                callback();
	            }
	        };
	    } else {  //Others
	        script.onload = function(){
	            callback();
	        };
	    }

	    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js';
	    document.getElementsByTagName("head")[0].appendChild(script);
	}
}
