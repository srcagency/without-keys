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

		var obj = withoutKeys(foo);

		t.deepEqual(obj, obj);
	});

	t.test('keys: empty array', function( t ){
		t.plan(1);

		var obj = withoutKeys(foo, []);

		t.deepEqual(obj, obj);
	});

	t.test('keys: wrong', function( t ){
		t.plan(1);

		var obj = withoutKeys(foo, ['d']);

		t.deepEqual(obj, obj);
	});

	t.test('keys: not array', function( t ){
		t.plan(1);

		var obj = withoutKeys(foo, 'd');

		t.deepEqual(obj, obj);
	});
});
