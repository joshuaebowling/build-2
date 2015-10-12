var React = require('react');
var TradeTable = require('./TradeTable.jsx');
var Notifier = require('react-bs-notifier');
var App = React.createClass({
	alerts:[ 
		{
			type:'success',
			message:'No More Script Running Errors',
			headline:'New Messsage'
		}
	],
	render: function() {
		return <div>
		<section>
			<TradeTable></TradeTable>
		</section>
		</div>
	}
});
module.exports = App;
