const Browser = require('zombie');
const path = require('path');

var completeAt = 6;
var completed = 0;
var url = 'file://'+path.resolve('./test/basic.html');


describe('Browser', function() {

	this.timeout(10000);

	describe('Display 6 cards', function() {

		it('Should load successfuly', function() {
			const browser = new Browser;
			browser.visit(url);
			browser.assert.success();
		});

		it('Should display 6 cards. 3 Inline, 3 Hover', function(done) {
			const browser = new Browser;
			browser.on('error',function(error){
				console.error(error);
				throw (error);
			})
			browser.on('event',function(event,target,c){
				if(event._type === 'idc-elementCreated') {
					completed++;
					console.log(completed);
				}
				if(event._type === 'idc-popoverCreated') {
					return browser.evaluate(`$('.idc-hasIcon').trigger('mouseover');`);
				}
			})
			browser.on('done',function(name,a,b){
				console.error('lolol');
			})
			browser.visit(url).then(function(){
				browser.wait(500);
			});
		});
	});
});
