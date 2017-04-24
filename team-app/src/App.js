import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MenuItem from 'material-ui/MenuItem';

import Main from './Main';


injectTapEventPlugin();

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
  divider: {
    width: 30,
    height: 'auto',
    display: 'inline-block',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  myCallback(dataFromChild) {
    this.setState({ csvData: dataFromChild });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="App">
          <AppBar
            title="Team Matcher"
            onLeftIconButtonTouchTap={this.handleToggle}/>
          <Drawer 
            open={this.state.open} 
            docked={false}>
            <MenuItem onTouchTap={this.handleToggle} value={'/'} primaryText="Hide"/>
            <MenuItem>
              <a href="https://github.com/pelovett/CrestedDuckTeamMatcher" style={styles.link}>Github Repository</a>
            </MenuItem>
            <MenuItem>
              Created by:
              <ul style={{listStyle: 'none'}}>
                <li>Peter Lovett</li>
                <li>Cathy Webster</li>
                <li>Wyatt Reed</li>
                <li>Kathryn Lovett</li>
              </ul>
            </MenuItem>
          </Drawer>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
