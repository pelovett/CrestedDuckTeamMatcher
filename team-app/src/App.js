import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MenuItem from 'material-ui/MenuItem';


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
              <a href="https://github.com/pelovett/CrestedDuckTeamMatcher">Check Out Our Repo</a>
            </MenuItem>
            <ul style={{listStyle: 'none'}}>
              <li>Created by:</li>
              <li>Peter Lovett</li>
              <li>Cathy Webster</li>
              <li>Wyatt Reed</li>
              <li>Kathryn Lovett</li>
            </ul>
          </Drawer>
          <div className="App-body" style={styles.container}>
            <h2>Time to match teams!</h2>
            <p>Upload your .csv file to get started.</p>
            <form id="file-form" action="/result" method="POST">
                <RaisedButton containerElement="label" label="Select File" primary={true}>
                  <input type="file" id="csv-select" name="csv-file" style={{ display: 'none' }} />
                </RaisedButton>
                <div style={styles.divider} />
                <RaisedButton type="submit" id="upload-button" style={{textColor: 'white' }} primary={true}>Upload</RaisedButton>
            </form>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
