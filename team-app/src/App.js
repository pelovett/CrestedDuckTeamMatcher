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
import {CSVLink, CSVDownload} from 'react-csv';
import DropDownMenu from 'material-ui/DropDownMenu';

injectTapEventPlugin();

const styles = {
  main: {
    textAlign: 'center',
    paddingTop: 150,
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
    width: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
  menu: {
    backgroundColor: '#0097A7', 
    textColor: '#212121',
  },
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false, csvData: [], value: 3, label: "Select File"};
    this.handleToggle = this.handleToggle.bind(this);
    this.handle_csv = this.handle_csv.bind(this);
    this.make_csv = this.make_csv.bind(this);

    this.goHome = this.goHome.bind(this);
    this.sendXHRequest = this.sendXHRequest.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.resultXHRequest = this.resultXHRequest.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateLabel = this.updateLabel.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }
  handle_csv(csv_data) {
    this.setState({ csvData: csv_data });
  }

  goHome() {
    location.href = "/";
  }

  sendXHRequest(postData, uri) {
    // Get an XMLHttpRequest instance
    var xhr = new XMLHttpRequest();

    // Set up request
    xhr.open('POST', uri, true);

    xhr.onreadystatechange = function (oEvent) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // Request was successful
          
          var data = JSON.parse(xhr.responseText);
          this.setState({ csvData: data.result.csv });
        } else {
          alert("Error", xhr.statusText);
        }
      }
    }.bind(this);

    // Send
    xhr.send(postData);
  }

  resultXHRequest(uri) {
    // Get an XMLHttpRequest instance
    var xhr = new XMLHttpRequest();

    // Set up request
    xhr.open('POST', 'http://localhost:5000/transform_csv', true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function (oEvent) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // Request was successful
        } else {
          alert("Error", xhr.statusText);
        }
      }
    };

    // Send
    xhr.send(JSON.stringify(this.state.csvData));
  }


  make_csv() {
    //event.preventDefault();

    // Switching div from Main to Result
    var main = document.getElementById('mainDiv');
    main.style.display = 'none';
    var result = document.getElementById('resultDiv');
    result.style.display = 'block';

    var formData = new FormData();

    var fileInput = document.getElementById('csv_file');

    var file = fileInput.files[0];

    formData.append('csv_file', file);

    // Sending to location defined in form
    var form = document.getElementById('file-form');
    var action = form.getAttribute('action');

    var uri = "http://localhost:5000" + action;

    this.sendXHRequest(formData, uri);
  }

  handleClick(event) {
    event.preventDefault();

    // Switching div from Main to Result
    var main = document.getElementById('mainDiv');
    main.style.display = 'none';
    var result = document.getElementById('resultDiv');
    result.style.display = 'block';

    var formData = new FormData();

    var fileInput = document.getElementById('csv_file');

    var file = fileInput.files[0];

    formData.append('team_size', this.state.value);
    formData.append('csv_file', file);

    // Sending to location defined in form
    var form = document.getElementById('file-form');
    var action = form.getAttribute('action');

    var uri = "http://localhost:5000"+action;

    this.sendXHRequest(formData, uri);
  }

  handleChange = (event, index, value) => this.setState({value});

  updateLabel() {
    var fileInput = document.getElementById('csv_file');
    var file = fileInput.files[0];

    this.setState({label:file.name});
  }

  render() {
    this.make_csv;
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
            <h1>Time to match teams!</h1>
            <p>Upload your .csv file to get started.</p>
            <form id="file-form" action="/result" encType="multipart/form-data" method="POST">
              <RaisedButton id="file-button" containerElement="label" label={this.state.label} primary={true}>
                <input
                  type="file"
                  id="csv_file"
                  name="csv_file"
                  style={{ display: 'none' }} 
                  onChange={this.updateLabel} />
              </RaisedButton>
              <br />
              <p>Select your desired team size.</p>
              <DropDownMenu 
                value={this.state.value} 
                onChange={this.handleChange}
                style={styles.menu}>
                <MenuItem value={2} primaryText="Team of Two" />
                <MenuItem value={3} primaryText="Team of Three" />
                <MenuItem value={4} primaryText="Team of Four" />
                <MenuItem value={5} primaryText="Team of Five" />
              </DropDownMenu>
              <br />
              <p>...and submit!</p>
              <RaisedButton
                type="submit"
                id="upload-button"
                onClick={this.handleClick}
                primary={true}>Submit</RaisedButton>
            </form>
          </div>
          <div className="Result" style={styles.result} id="resultDiv">
            <h1>The results are in!</h1>
              <RaisedButton>
                <CSVLink data={this.state.csvData} style={styles.link}
                  filename={"TeamsByRow.csv"}
                  className="btn btn-primary"
                  target="_blank">
                  Download
                </CSVLink>
              </RaisedButton>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
