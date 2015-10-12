var data, makeData, single, values;

values = {
	Contract: [],
	Principal: [],
	Collateral: [],
	Notional: [],
	Expiry:[],
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