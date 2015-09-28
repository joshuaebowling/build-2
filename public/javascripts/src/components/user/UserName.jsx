var React = require('react');
var UserName = React.createClass({
	name: function() {
		return this.props.lastName + ', ' + this.props.firstName
	},
	render: function() {
		return <div>		
			<h1> Hello, {this.name()} </h1>
		</div>
	}
});

module.exports = UserName;