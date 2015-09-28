var React = require('react');
var UserName = require('./user/UserName.jsx');
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
		<h1><UserName lastName="johnson" firstName="john" /></h1>
		<section>
			<Notifier alerts={this.alerts}></Notifier>
		</section>
		</div>
	}
});
module.exports = App;
