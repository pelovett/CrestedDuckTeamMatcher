import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MenuItem from 'material-ui/MenuItem';

import Main from './Main';


injectTapEventPlugin();

const styles = {
  main: {
    textAlign: 'center',
    paddingTop: 200,
  },
  result: {
    textAlign: 'center',
    paddingTop: 200,
    display: 'none',
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
    this.state = {open: false, csvData: null };
    this.handleToggle = this.handleToggle.bind(this);
    this.goHome = this.goHome.bind(this);
    this.sendXHRequest = this.sendXHRequest.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.resultXHRequest = this.resultXHRequest.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  goHome() {
    location.href = "/";
  }

  sendXHRequest(formData, uri) {
    // Get an XMLHttpRequest instance
    var xhr = new XMLHttpRequest();

    // Set up request
    xhr.open('POST', uri, true);

    xhr.onreadystatechange = function (oEvent) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          alert(xhr.responseText);
          
          var data = JSON.parse(xhr.responseText);
          alert(JSON.stringify(data.result));
          this.setState({ csvData: data.result.csv });
        } else {
          alert("Error", xhr.statusText);
        }
      }
    }.bind(this);

    // Send
    xhr.send(formData);
  }

  resultXHRequest(uri) {
    // Get an XMLHttpRequest instance
    var xhr = new XMLHttpRequest();

    // Set up request
    xhr.open('GET', 'http://localhost:5000/transform_csv', true);

    xhr.onreadystatechange = function (oEvent) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          alert(xhr.responseText)
          // browserHistory.push('result');
          // this.context.router.push('/result');
          // this.props.route.parentCallback(xhr.responseText);
        } else {
          alert("Error", xhr.statusText);
        }
      }
    };

    // Send
    xhr.send(null);
  }


  handleClick(event) {
    event.preventDefault();
    var main = document.getElementById('mainDiv');
    main.style.display = 'none';
    var result = document.getElementById('resultDiv');
    result.style.display = 'block';
    alert("Handle Click called!");
    var formData = new FormData();

    var fileInput = document.getElementById('csv_file');

    var file = fileInput.files[0];

    formData.append('csv_file', file);

    // Sending to location defined in form
    var form = document.getElementById('file-form');
    var action = form.getAttribute('action');

    var uri = "http://localhost:5000" + action;

    this.sendXHRequest(formData, uri);
    // location.href = 'result';
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="App">
          <AppBar
            title="Team Matcher"
            onLeftIconButtonTouchTap={this.handleToggle}
            iconElementRight={<FlatButton label="Home" />}
            onRightIconButtonTouchTap={this.goHome}/>
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
          <div className="Main" style={styles.main} id="mainDiv">
            <h2>Time to match teams!</h2>
            <p>Upload your .csv file to get started.</p>
            <form id="file-form" action="/result" encType="multipart/form-data" method="POST">
                <RaisedButton containerElement="label" label="Select File" primary={true}>
                  <input
                    type="file"
                    id="csv_file"
                    name="csv_file"
                    style={{ display: 'none' }} />
                </RaisedButton>
                <div style={styles.divider} />
                <RaisedButton
                  type="submit"
                  id="upload-button"
                  onClick={this.handleClick}
                  style={{textColor: 'white' }}
                  primary={true}>Upload</RaisedButton>
            </form>
          </div>
          <div className="Result" style={styles.result} id="resultDiv">
            <h1>The results are in!</h1>
            {/*<form id="result-form" action="/transform_csv" method="post">*/}
                <RaisedButton 
                  label="Get Results" 
                  onClick={this.resultXHRequest}>
                  {/*<input type="submit" id="input" style={{ display: 'none' }} />*/}
                </RaisedButton>
            {/*</form>*/}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
