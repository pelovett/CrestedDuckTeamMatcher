import React, { Component } from 'react';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PropTypes from 'prop-types';

import App from './App';
import Main from './Main';
import Result from './Result';

class MainWrapper extends Component {
	render() {
		return (
			<Main parentCallback={this.myCallback} />
		);
	}
}

class ResultWrapper extends Component {
	render() {
		return (
			<Result csvData={this.state.csvData} />
		);
	}
}


class AppRouter extends Component {
	constructor(props) {
	    super(props);
	    this.state = {csvData: null};
	    this.myCallback = this.myCallback.bind(this);
	}

	myCallback(childData) {
		this.setState({csvData: childData});
	}

	static childContextTypes = {
		muiTheme: PropTypes.object,
		router: PropTypes.object
	}

 	getChildContext()
    {
        return {
            muiTheme: getMuiTheme()
        }
    }

	render() {
		return (
			<Router history={browserHistory}>
				<div>
					<App>
						<Route exact path="/" component={Main} parentCallback={this.myCallback} />
						<Route path="/result" component={Result} csvData={this.state.csvData} />
					</App>
				</div>
			</Router>
		);
	}
}

export default AppRouter;