var _, prefix;
_ = require('underscore');

prefix = 'TradeStore_';
// let's try making the action values unique through the app so we can use 1 dispatcher
module.exports = {

  ActionTypes: {
    FILTER_TRADES:_.uniqueId(prefix),
    GET_TRADES: _.uniqueId(prefix),
    ERROR: _.uniqueId(prefix)
  }

};
