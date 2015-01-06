'use strict';

module.exports = withoutKeys;

function withoutKeys(obj, keys){
	if (!keys)
		return obj;

	var k = {};
	Object.keys(obj).forEach(function( key ){
		if (!~keys.indexOf(key))
			k[key] = obj[key];
	});

	return k;
}
