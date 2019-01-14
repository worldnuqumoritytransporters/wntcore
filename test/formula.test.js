var evalFormula = require('../formula/index').evaluate;
var validateFormula = require('../formula/index').validate;
var test = require('ava');

var objValidationState = {
	last_ball_mci: 0,
	arrAugmentedMessages: [{
		"app": "payment",
		"payload_location": "inline",
		"payload_hash": "2p893QLyyaUi0Nw5IWGjRtocjAksxpiFvXYuBRwPTZI=",
		"payload": {
			"outputs": [
				{"address": "MXMEKGN37H5QO2AWHT7XRG6LHJVVTAWU", "amount": 19088},
				{"address": "GFK3RDAPQLLNCMQEVGGD2KCPZTLSG3HN", "amount": 1}
			],
			"inputs": [{
				"unit": "p+U9OB+JOCW5/7hXiRpVw65HwzFprNfj68PCy/7BR6A=",
				"message_index": 0,
				"output_index": 1,
				"type": "transfer",
				"amount": 20000,
				"address": "MXMEKGN37H5QO2AWHT7XRG6LHJVVTAWU"
			}]
		}
	}],
	messages: [{
		"app": "payment",
		"payload_hash": "vHTdyhuQI1jnlAAyc6EGzwVCH0BGFT+dIYrsjTeRV8k=",
		"payload_location": "inline",
		"payload": {
			"inputs": [{
				"unit": "W/6iS75IT8mKJzKyyjz5dKCp9Ux6F7+AUUNq8VLiZ6o=",
				"message_index": 0,
				"output_index": 0
			}],
			"outputs": [
				{"address": "MXMEKGN37H5QO2AWHT7XRG6LHJVVTAWU", "amount": 19088},
				{"address": "GFK3RDAPQLLNCMQEVGGD2KCPZTLSG3HN", "amount": 1}
			]
		}
	}]
};


test('1 + 1', t => {
	evalFormula(0, "1 + 1", 0, 0, 0, res => {
		t.deepEqual(res.eq(2), true);
	});
});

test('1 - 1', t => {
	evalFormula(0, "1 - 1", 0, 0, 0, res => {
		t.deepEqual(res.eq(0), true);
	});
});

test('2 * 2', t => {
	evalFormula(0, "2 * 2", 0, 0, 0, res => {
		t.deepEqual(res.eq(4), true);
	});
});

test('2 / 2', t => {
	evalFormula(0, "2 / 2", 0, 0, 0, res => {
		t.deepEqual(res.eq(1), true);
	});
});

test('2 ^ 4', t => {
	evalFormula(0, "2 ^ 4", 0, 0, 0, res => {
		t.deepEqual(res.eq(16), true);
	});
});

test('(2 + 2) * 2', t => {
	evalFormula(0, "(2 + 2) * 2", 0, 0, 0, res => {
		t.deepEqual(res.eq(8), true);
	});
});

test('2 + 2 * 2', t => {
	evalFormula(0, "2 + 2 * 2", 0, 0, 0, res => {
		t.deepEqual(res.eq(6), true);
	});
});

test('pi + 2', t => {
	evalFormula(0, "pi + 2", 0, 0, 0, res => {
		t.deepEqual(res.eq(Math.PI + 2), true);
	});
});

test('e + 2', t => {
	evalFormula(0, "e + 2", 0, 0, 0, res => {
		t.deepEqual(res.eq(Math.E + 2), true);
	});
});

test('sin(2)', t => {
	evalFormula(0, "sin(2)", 0, 0, 0, res => {
		t.deepEqual(res.eq(0.9092974268256817), true);
	});
});

test('cos(2)', t => {
	evalFormula(0, "cos(2)", 0, 0, 0, res => {
		t.deepEqual(res.eq(-0.4161468365471424), true);
	});
});

test('tan(2)', t => {
	evalFormula(0, "tan(2)", 0, 0, 0, res => {
		t.deepEqual(res.eq(-2.185039863261519), true);
	});
});

test('asin(1)', t => {
	evalFormula(0, "asin(1)", 0, 0, 0, res => {
		t.deepEqual(res.eq(1.5707963267948966), true);
	});
});

test('acos(1)', t => {
	evalFormula(0, "acos(1)", 0, 0, 0, res => {
		t.deepEqual(res.eq(0), true);
	});
});

test('atan(2)', t => {
	evalFormula(0, "atan(2)", 0, 0, 0, res => {
		t.deepEqual(res.eq(1.1071487177940904), true);
	});
});

test('sqrt(2)', t => {
	evalFormula(0, "sqrt(2)", 0, 0, 0, res => {
		t.deepEqual(res.eq('1.4142135623730950488'), true);
	});
});

test('ln(2)', t => {
	evalFormula(0, "ln(2)", 0, 0, 0, res => {
		t.deepEqual(res.eq(0.6931471805599453), true);
	});
});

test('1 == 1', t => {
	evalFormula(0, "1 == 1", 0, 0, 0, res => {
		t.deepEqual(res, true);
	});
});

test('1 != 1', t => {
	evalFormula(0, "1 != 1", 0, 0, 0, res => {
		t.deepEqual(res, false);
	});
});

test('1 != 2', t => {
	evalFormula(0, "1 != 2", 0, 0, 0, res => {
		t.deepEqual(res, true);
	});
});

test('1 < 2', t => {
	evalFormula(0, "1 < 2", 0, 0, 0, res => {
		t.deepEqual(res, true);
	});
});

test('1 > 2', t => {
	evalFormula(0, "1 > 2", 0, 0, 0, res => {
		t.deepEqual(res, false);
	});
});

test('1 >= 2', t => {
	evalFormula(0, "2 >= 2", 0, 0, 0, res => {
		t.deepEqual(res, true);
	});
});

test('1 <= 2', t => {
	evalFormula(0, "1 <= 2", 0, 0, 0, res => {
		t.deepEqual(res, true);
	});
});

test('0 >= 2', t => {
	evalFormula(0, "0 >= 2", 0, 0, 0, res => {
		t.deepEqual(res, false);
	});
});

test('3 <= 2', t => {
	evalFormula(0, "3 <= 1", 0, 0, 0, res => {
		t.deepEqual(res, false);
	});
});

test('"test" == "test"', t => {
	evalFormula(0, '"test" == "test"', 0, 0, 0, res => {
		t.deepEqual(res, true);
	});
});

test('"test" != "test"', t => {
	evalFormula(0, '"test" != "test"', 0, 0, 0, res => {
		t.deepEqual(res, false);
	});
});

test('"test 1" != "test 2"', t => {
	evalFormula(0, '"test 1" != "test 2"', 0, 0, 0, res => {
		t.deepEqual(res, true);
	});
});

test('"test 2" != "test 2"', t => {
	evalFormula(0, '"test 2" != "test 2"', 0, 0, 0, res => {
		t.deepEqual(res, false);
	});
});

test('"test 3" == "test 3"', t => {
	evalFormula(0, '"test 3" == "test 3"', 0, 0, 0, res => {
		t.deepEqual(res, true);
	});
});

test('1 and 1', t => {
	evalFormula(0, "1 and 1", 0, 0, 0, res => {
		t.deepEqual(res, true);
	});
});

test('0 and 0', t => {
	evalFormula(0, "0 and 0", 0, 0, 0, res => {
		t.deepEqual(res, false);
	});
});

test('0 and 1', t => {
	evalFormula(0, "0 and 1", 0, 0, 0, res => {
		t.deepEqual(res, false);
	});
});

test('0 or 1', t => {
	evalFormula(0, "0 or 1", 0, 0, 0, res => {
		t.deepEqual(res, true);
	});
});

test('1 == 1 and 1 == 1', t => {
	evalFormula(0, "1 == 1 and 1 == 1", 0, 0, 0, res => {
		t.deepEqual(res, true);
	});
});
test('1 == 1 and 1 == 2', t => {
	evalFormula(0, "1 == 1 and 1 == 2", 0, 0, 0, res => {
		t.deepEqual(res, false);
	});
});

test('1 == 1 or 1 == 2', t => {
	evalFormula(0, "1 == 1 or 1 == 2", 0, 0, 0, res => {
		t.deepEqual(res, true);
	});
});

test('1 == 2 or 1 == 2', t => {
	evalFormula(0, "1 == 2 or 1 == 2", 0, 0, 0, res => {
		t.deepEqual(res, false);
	});
});

test('10 == 10 ? 1 : 2', t => {
	evalFormula(0, "10 == 10 ? 1 : 2", 0, 0, 0, res => {
		t.deepEqual(res.eq(1), true);
	});
});

test('10 != 10 ? 1 : 2', t => {
	evalFormula(0, "10 != 10 ? 1 : 2", 0, 0, 0, res => {
		t.deepEqual(res.eq(2), true);
	});
});

test('10 == 10 ? 1 + 1 : 2 + 2', t => {
	evalFormula(0, "10 == 10 ? 1 + 1 : 2 + 2", 0, 0, 0, res => {
		t.deepEqual(res.eq(2), true);
	});
});

test('10 != 10 ? 1 + 1 : 2 + 2', t => {
	evalFormula(0, "10 != 10 ? 1 + 1 : 2 + 2", 0, 0, 0, res => {
		t.deepEqual(res.eq(4), true);
	});
});

test('1000000000000000000000000000000 == 1000000000000000000000000000000', t => {
	evalFormula(0, "1000000000000000000000000000000 == 1000000000000000000000000000000", 0, 0, 0, res => {
		t.deepEqual(res, true);
	});
});

test('1000000000000000000000000000000 == 1000000000000000000000000000001', t => {
	evalFormula(0, "1000000000000000000000000000000 == 1000000000000000000000000000001", 0, 0, 0, res => {
		t.deepEqual(res, false);
	});
});

test('min 1,2', t => {
	evalFormula(0, 'min(1,2)', 0, 0, 0, res => {
		t.deepEqual(res.eq(1), true);
	});
});

test('min 1,2,4', t => {
	evalFormula(0, "min(1,2,4)", 0, 0, 0, res => {
		t.deepEqual(res.eq(1), true);
	});
});

test('min 2,3,5,7', t => {
	evalFormula(0, "min(2,3,5,7)", 0, 0, 0, res => {
		t.deepEqual(res.eq(2), true);
	});
});

test('max 1,2', t => {
	evalFormula(0, "max(1,2)", 0, 0, 0, res => {
		t.deepEqual(res.eq(2), true);
	});
});

test('max 1,2,4', t => {
	evalFormula(0, "max(1,2,4)", 0, 0, 0, res => {
		t.deepEqual(res.eq(4), true);
	});
});
test('max 2,3,5,7', t => {
	evalFormula(0, "max(2,3,5,7)", 0, 0, 0, res => {
		t.deepEqual(res.eq(7), true);
	});
});

test('ceil 2.5', t => {
	evalFormula(0, "ceil(2.5)", 0, 0, 0, res => {
		t.deepEqual(res.eq(3), true);
	});
});

test('floor 2.5', t => {
	evalFormula(0, 'floor(2.5)', 0, 0, 0, res => {
		t.deepEqual(res.eq(2), true);
	});
});

test('round 2.5', t => {
	evalFormula(0, 'round(2.9)', 0, 0, 0, res => {
		t.deepEqual(res.eq(3), true);
	});
});

test("0.1 + 0.2 == 0.3", t => {
	evalFormula(0, "0.1 + 0.2 == 0.3", 0, 0, 0, res => {
		t.deepEqual(res, true);
	});
});

test("'test' || 'test'", t => {
	evalFormula(0, "1 || 1 || 1", 0, 0, 0, res => {
		t.deepEqual(res, "111");
	});
});

test("'test' || 'test' and 'test'", t => {
	evalFormula(0, "'test' || 'test' || 'test'", 0, 0, 0, res => {
		t.deepEqual(res, "testtesttest");
	});
});


test("'test' || 1 and 'test'", t => {
	evalFormula(0, "'test' || 1 || 'test'", 0, 0, 0, res => {
		t.deepEqual(res, "test1test");
	});
});

test("1 == 1", t => {
	evalFormula(0, "1 == 1", 0, 0, 0, res => {
		t.deepEqual(res, true);
	});
});

test("\"1\" == \"1\"", t => {
	evalFormula(0, "\"1\" == \"1\"", 0, 0, 0, res => {
		t.deepEqual(res, true);
	});
});

test("\"1\" < \"1\"", t => {
	evalFormula(0, "\"1\" < \"1\"", 0, 0, 0, res => {
		t.deepEqual(res, false);
	});
});

test("1 < \"2\"", t => {
	evalFormula(0, "1 < \"2\"", 0, 0, 0, res => {
		t.deepEqual(res, true);
	});
});

test("\"1\" < 2", t => {
	evalFormula(0, "\"1\" < 2", 0, 0, 0, res => {
		t.deepEqual(res, true);
	});
});

test("\"bb\" > \"ba\"", t => {
	evalFormula(0, "\"1\" < 2", 0, 0, 0, res => {
		t.deepEqual(res, true);
	});
});

test('formula - amount !=', t => {
	evalFormula(0, 'input[asset=base].amount != output[asset=base, address=GFK3RDAPQLLNCMQEVGGD2KCPZTLSG3HN].amount', objValidationState.arrAugmentedMessages, objValidationState, 0, res => {
		t.deepEqual(res, true);
	});
});

test('formula - amount = 1', t => {
	evalFormula(0, "output[asset = base, amount=1].amount == 1", objValidationState.arrAugmentedMessages, objValidationState, 0, res => {
		t.deepEqual(res, true);
	});
});

test('formula - datafeed', t => {
	let db = {};
	db.query = function (query, params, cb) {
		let rows = [{value: null, int_value: 10}];
		cb(rows);
	};
	evalFormula(db, "data_feed[oracles=\"MXMEKGN37H5QO2AWHT7XRG6LHJVVTAWU\", feed_name=\"test\", ifseveral=\"last\"] == 10", objValidationState.arrAugmentedMessages, objValidationState, 0, res => {
		t.deepEqual(res, true);
	});
});

test('formula - datafeed', t => {
	let db = {};
	db.query = function (query, params, cb) {
		let rows = [{value: 'test', int_value: null}];
		cb(rows);
	};
	evalFormula(db, "data_feed[oracles=\"MXMEKGN37H5QO2AWHT7XRG6LHJVVTAWU\", feed_name=\"test\", ifseveral=\"last\"] + 10", objValidationState.arrAugmentedMessages, objValidationState, 0, res => {
		t.deepEqual(res, false);
	});
});

test('formula - datafeed2', t => {
	let db = {};
	db.query = function (query, params, cb) {
		let rows = [{value: null, int_value: 10}];
		cb(rows);
	};
	evalFormula(db, "data_feed[oracles=\"MXMEKGN37H5QO2AWHT7XRG6LHJVVTAWU:this address\", feed_name=\"test\", ifseveral=\"last\", mci > 10] == 10", objValidationState.arrAugmentedMessages, objValidationState, 0, res => {
		t.deepEqual(res, true);
	});
});

test('formula - datafeed3', t => {
	let db = {};
	db.query = function (query, params, cb) {
		let rows = [{value: null, int_value: 10}];
		cb(rows);
	};
	evalFormula(db, 'data_feed[oracles="MXMEKGN37H5QO2AWHT7XRG6LHJVVTAWU:this address", feed_name="te\\"st", ifseveral="last", mci > 10] == 10', objValidationState.arrAugmentedMessages, objValidationState, 0, res => {
		t.deepEqual(res, true);
	});
});

test('formula - datafeed4', t => {
	let db = {};
	db.query = function (query, params, cb) {
		let rows = [{value: null, int_value: 10}];
		cb(rows);
	};
	evalFormula(db, "data_feed[oracles=\"MXMEKGN37H5QO2AWHT7XRG6LHJVVTAWU:this address\", feed_name='test', ifseveral=\"last\", mci > 10] == 10", objValidationState.arrAugmentedMessages, objValidationState, 0, res => {
		t.deepEqual(res, true);
	});
});

test('formula - datafeed5', t => {
	let db = {};
	db.query = function (query, params, cb) {
		let rows = [{value: null, int_value: 10}];
		cb(rows);
	};
	evalFormula(db, "data_feed[oracles=\"MXMEKGN37H5QO2AWHT7XRG6LHJVVTAWU:this address\", feed_name='tes\"t', ifseveral=\"last\", mci > 10] == 10", objValidationState.arrAugmentedMessages, objValidationState, 0, res => {
		t.deepEqual(res, true);
	});
});

test('formula - datafeed6', t => {
	let db = {};
	db.query = function (query, params, cb) {
		let rows = [{value: null, int_value: 10}];
		cb(rows);
	};
	evalFormula(db, "data_feed[oracles=\"MXMEKGN37H5QO2AWHT7XRG6LHJVVTAWU:this address\", feed_name='te\\'st', ifseveral=\"last\", mci > 10] == 10", objValidationState.arrAugmentedMessages, objValidationState, 0, res => {
		t.deepEqual(res, true);
	});
});

test('formula - datafeed7', t => {
	let db = {};
	db.query = function (query, params, cb) {
		let rows = [{value: null, int_value: 10}];
		cb(rows);
	};
	evalFormula(db, "data_feed[oracles=\"MXMEKGN37H5QO2AWHT7XRG6LHJVVTAWU:this address\", feed_name='t,e(s)[],\\'t', ifseveral=\"last\", mci > 10] == 10", objValidationState.arrAugmentedMessages, objValidationState, 0, res => {
		t.deepEqual(res, true);
	});
});

test('formula - datafeed8', t => {
	let db = {};
	db.query = function (query, params, cb) {
		let rows = [{value: null, int_value: 10}];
		cb(rows);
	};
	evalFormula(db, "1 + data_feed[oracles=\"MXMEKGN37H5QO2AWHT7XRG6LHJVVTAWU:this address\", feed_name='t,e(s)[],\\'t', ifseveral=\"last\", mci > 10]", objValidationState.arrAugmentedMessages, objValidationState, 0, res => {
		t.deepEqual(res.eq(11), true);
	});
});

test('validate 1 + 1', t => {
	validateFormula("1 + 1", 0, res => {
		t.deepEqual(res.error, false);
	})
});

test('validate datafeed ok', t => {
	validateFormula("data_feed[oracles=\"this address\", feed_name=\"test\"]", 0, res => {
		t.deepEqual(res.error, false);
	})
});

test('validate datafeed error', t => {
	validateFormula("data_feed[oracles=\"this address\"]", 0, res => {
		t.deepEqual(res.error, true);
	})
});

test('validate 1 + datafeed ok', t => {
	validateFormula("1 + data_feed[oracles=\"this address\", feed_name=\"test\"]", 0, res => {
		t.deepEqual(res.error, false);
	});
});

test('validate 1 + datafeed error', t => {
	validateFormula("1 + data_feed[oracles=\"this address\"]", 0, res => {
		t.deepEqual(res.error, true);
	})
});

test('validate round ok', t => {
	validateFormula("round(1+1.5)", 0, res => {
		t.deepEqual(res.error, false);
	})
});

test('validate min ok', t => {
	evalFormula(0, "min(1 + (1 + 1) - 1, 2)", 0, 0, 0, res => {
		t.deepEqual(res.eq(2), true);
	})
});

test('eval ternary ok', t => {
	evalFormula(0, "1 == 1 ? 'ok' : '!ok'", 0, 0, 0, res => {
		t.deepEqual(res, 'ok');
	})
});

test('validate 1 + datafeed error', t => {
	validateFormula("max(data_feed[oracles=\"this address\"], 2)", 0, res => {
		t.deepEqual(res.error, true);
	})
});

test('validate 1 + datafeed error', t => {
	validateFormula("1 = 1", 0, res => {
		t.deepEqual(res.error, true);
	})
});

test('inp', t => {
	validateFormula("input[address=this address, amount>10].amount", 0, res => {
		t.deepEqual(res.error, false);
	})
});

test('inp', t => {
	validateFormula("input[address=this address].amount == 20000", 0, res => {
		t.deepEqual(res.error, false);
	})
});
