import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

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


class Main extends Component {
  constructor(props) {
    super(props);
    this.sendXHRequest = this.sendXHRequest.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  sendXHRequest(formData, uri) {
    // Get an XMLHttpRequest instance
    var xhr = new XMLHttpRequest();

    // Set up request
    xhr.open('POST', uri, true);

    xhr.onreadystatechange = function (oEvent) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          alert(xhr.responseText)
        } else {
          alert("Error", xhr.statusText);
        }
      }
    }

    // Send
    xhr.send(formData);
  }


  handleClick(event) {
    event.preventDefault();
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
    location.href = 'result';
  }

  render() {
    return (
      <div className="App-body" style={styles.container}>
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
    );
  }

}

export default Main;