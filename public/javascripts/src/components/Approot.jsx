var React = require('react');
var dataGrid = require('react-datagrid');
var App = React.createClass({
	render: function() {
		return <h1> Hello, {this.props.name} </h1>
	}
});
module.exports = App;
