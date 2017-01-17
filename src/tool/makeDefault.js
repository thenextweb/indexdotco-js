module.exports = function(object,defaults) {
	for (var k in defaults) {
		if(object[k] === undefined) object[k] = defaults[k];
	}
	for (var k in object) {
		if(defaults[k] === undefined) throw "invalid key ("+k+") in object";
	}
	return object;
}
