import config from 'config';

export default function(list) {

	let url = config.endpoint+'list/'+list+'?version='+config.version;

	var rq = window.jQuery.ajax({
		dataType: "json",
		type: 'GET',
		url: url
	});

	rq.fail(function(xhr,error){
		if(error !== 'abort'){
			console.error('[index Popovers] http error ('+error+') loading Popover for "'+list+'" at endpoint "'+url+'"');
		}
	})

	return rq;

}
