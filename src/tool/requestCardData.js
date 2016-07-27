import config from 'config';

export default function(company) {

	let url = config.endpoint+'company/'+company+'?version='+config.version;

	window.jQuery.support.cors = true;

	var rq = window.jQuery.ajax({
		dataType: "json",
		type: 'GET',
		url: url
	});

	rq.fail(function(xhr,error){
		if(error !== 'abort'){
			console.error('[index Popovers] http error ('+error+') loading Popover for "'+company+'" at endpoint "'+url+'"');
		}
	})

	return rq;

}
