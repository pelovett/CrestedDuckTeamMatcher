import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PropTypes from 'prop-types';

import App from './App';
import Main from './Main';
import Result from './Result';


const Nav = (props, Comp) => {
    return (
        <div>
            <Comp {...props} />
        </div>
    )
}


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
			<Router>
				<div>
					<App>
						<Route exact path="/" component={(props) => Nav(props, Main)} />
						<Route path="/result" component={(props) => Nav(props, Result)} />
					</App>
				</div>
			</Router>
		);
	}
}

export default AppRouter;