var data, makeData, single, values;

values = {
	Contract: ['AAPL','DELL','ACN', 'ADT', 'AET', 'AG', 'GE', 'AHT', 'AL'],
	Principal: [1],
	Collateral: [1],
	Notional: [1],
	Expiry:['never'],
	TimeToExpiry:[],
	PAndL:[],
	Status:[],
	Date:[]
};

single = {
	Contract:false,
	Principal: false,
	Collateral: false,
	Notional: false,
	Expiry: false,
	TimeToExpiry: false,
	PAndL: false,
	Status: false,
	Date: false
};

makeData = function() {
};

data = null;

module.exports = data || makeData();