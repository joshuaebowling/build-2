var _, MaterialUI, React, 
	Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,
	AppDispatcher, pubsub, TradeStore, TradeStoreActions, TradeStoreConstants, _trades;

React = require('react');
MaterialUI = require('material-ui');
_ = require('underscore');

AppDispatcher = require('../dispatcher/AppDispatcher');
TradeStoreActions = require('../actions/TradeStoreActions');
TradeStoreConstants = require('../constants/TradeStoreConstants');
pubsub = require('../pubsub/tradeStorePubSub');
_trades = [];

Table = MaterialUI.Table;
TableBody = MaterialUI.TableBody;
TableFooter = MaterialUI.TableFooter;
TableHeaderColumn = MaterialUI.TableHeaderColumn;
TableHeader = MaterialUI.TableHeader;
TableRow = MaterialUI.TableRow;
TableRowColumn = MaterialUI.TableRowColumn;

module.exports = React.createClass({
	getInitialState: function() {
		var self;
		// they say you don't need the in react, this hasn't been my experience so far.
		self = this;
		// is this a good time to a subscription?
		self.getItemsSubscription = pubsub[TradeStoreConstants.ActionTypes.GET_TRADES](function(data) {
			console.log('arge from su b', arguments);
			self.setState('trades', data);
		});
		return { 
			// empty until we the subscription returns the data
			trades: _trades,
			Table:{
				fixedHeader: true,
				fixedFooter: true,
				stripedRows: false,
				showRowHover: false,
				selectable: true,
				multiSelectable: false,
				enableSelectAll: false,
				deselectOnClickaway: true,
				height: '300px',
			}
		};
	},
	buildRow: function(data) {
	  return <TableRow selected={data.selected}>
	      <TableRowColumn><button className="btn btn-success">Order</button></TableRowColumn>	  
	      <TableRowColumn>{data.name}</TableRowColumn>
	      <TableRowColumn>{data.code}</TableRowColumn>
	      <TableRowColumn>{data.currency} {data.price} per {data.per}</TableRowColumn>
	    </TableRow>		
	},
	buildRows: function() {
		var self;

		self = this;
		return [];

	},
	buildHeader: function() {},
	buildheaderColumn: function(name) {},
	addActions: function(item) {
		return item;
	},
	render: function() {
		return <Table
		  height={this.state.height}
		  fixedHeader={this.state.fixedHeader}
		  fixedFooter={this.state.fixedFooter}
		  selectable={this.state.selectable}
		  multiSelectable={this.state.multiSelectable}
		  onRowSelection={this._onRowSelection}>
		  <TableHeader enableSelectAll={this.state.enableSelectAll}>
		    <TableRow>
		      <TableHeaderColumn tooltip='Actions'>Contract</TableHeaderColumn>
		      <TableHeaderColumn tooltip='Name'>Principal</TableHeaderColumn>
		      <TableHeaderColumn tooltip='Id'>Collateral</TableHeaderColumn>
		      <TableHeaderColumn tooltip='Price'>Notional</TableHeaderColumn>
		      <TableHeaderColumn tooltip='Price'>Expiry</TableHeaderColumn>
		      <TableHeaderColumn tooltip='Price'>Time to Expiry</TableHeaderColumn>
		      <TableHeaderColumn tooltip='Price'>P&L</TableHeaderColumn>
		      <TableHeaderColumn tooltip='Price'>Status</TableHeaderColumn>
		      <TableHeaderColumn tooltip='Price'>Date</TableHeaderColumn>
		    </TableRow>
		  </TableHeader>
  		  <TableBody
		    deselectOnClickaway={this.state.deselectOnClickaway}
		    showRowHover={this.state.showRowHover}
		    stripedRows={this.state.stripedRows}>
		    {this.buildRows()}
		  </TableBody>

		</Table>
	}
});