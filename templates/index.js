var React = require('react');
var ReactDOM = require('react-dom');
var getMuiTheme = require('material-ui/styles/getMuiTheme');
var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

class MyClass extends Component {
	render() {
		return <MuiThemeProvider muiTheme={getMuiTheme()} />;
	} 
}

ReactDOM.render(<MyClass />, document.getElementById('root'));