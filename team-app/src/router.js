import React, { Component } from 'react';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PropTypes from 'prop-types';

import App from './App';
import Main from './Main';
import Result from './Result';


class AppRouter extends Component {
	static childContextTypes = {
		muiTheme: PropTypes.object
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
						<Route exact path="/" component={Main} />
						<Route path="/result" component={Result} />
					</App>
				</div>
			</Router>
		);
	}
}

export default AppRouter;