'use strict';

var withoutKeys = require('./index.js');
var test = require('tape');

test('without-keys', function( t ){
	var foo = {
		a: 'Rene',
		b: 'Nielsen',
		c: 'info@domain.com',
	};

	t.test('valid', function( t ){
		t.plan(1);

		var obj = withoutKeys(foo, ['c']);

		t.deepEqual(obj, {
			a: 'Rene',
			b: 'Nielsen',
		});
	});

	t.test('keys: no parameter', function( t ){
		t.plan(1);

		t.throws(function(){
			withoutKeys(foo);
		});
	});

	t.test('keys: empty array', function( t ){
		t.plan(1);

		var obj = withoutKeys(foo, []);

		t.deepEqual(foo, obj);
	});

	t.test('keys: not present', function( t ){
		t.plan(1);

		var obj = withoutKeys(foo, ['d']);

		t.deepEqual(foo, obj);
	});

	t.test('keys: not array', function( t ){
		t.plan(1);

		var obj = withoutKeys(foo, 'd');

		t.deepEqual(foo, obj);
	});

	t.test('keys: without all', function( t ){
		t.plan(1);

		var obj = withoutKeys(foo, ['a', 'b', 'c']);

		t.deepEqual(obj, {});
	});
});
