describe('Initialization', function() {
	it('window.indexDotCo should exist',function(done){
		if(window.indexDotCo) done();
		else done(new Error())
	})
});

describe('Rendering', function() {
	this.timeout(10000);
	var completeAt = 9;
	var completed = 0;
	it('should render '+completeAt+' cards', function(done) {
		window.indexDotCo.attach();
		document.addEventListener('idc-elementCreated',function(){
			completed++;
			if(completed >= completeAt) {
				done();
			}
		})
		document.addEventListener('idc-popoverCreated',function(ev){
			$(ev.target).trigger('mouseover');
		});
	});
	after(function(){
		if (window.callPhantom) {
			var date = new Date()
			var filename = "test/screenshots/" + date.getTime()
			console.log("Taking screenshot " + filename)
			callPhantom({'screenshot': filename})
		}
	})
});
