var _, prefix;
_ = require('underscore');

prefix = 'CurrencyStore.';
// let's try making the action values unique through the app so we can use 1 dispatcher
module.exports = {

  ActionTypes: {
    GET:_.uniqueId(prefix + 'get.'),
    CHANGE: _.uniqueId(prefix + 'change.'),
    ERROR: _.uniqueId(prefix + 'error.')
  }

};
