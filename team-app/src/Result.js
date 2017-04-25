import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};


class Result extends Component {
	constructor(props) {
		super(props);
		this.myXHRequest = this.myXHRequest.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	myXHRequest(uri) {
		// Get an XMLHttpRequest instance
		var xhr = new XMLHttpRequest();

		// Set up request
		xhr.open('GET', uri, true);

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
		}

		// Send
		xhr.send(null);
	}


	handleSubmit(event) {
		// event.preventDefault();
		alert("Handle Click called!");
	    // var formData = new FormData();

	    // var fileInput = document.getElementById('input');

	    // var file = fileInput.files[0];

	    // formData.append('csv_file', file);

		// Sending to location defined in form
		// var form = document.getElementById('result-form');
		// var action = form.getAttribute('action');

		// alert("Sending to >" + action);

		var uri = "http://localhost:5000/transform_csv";

		this.myXHRequest(uri);
		// location.href = 'transform_csv';
	}


	render() {
		var data;
		if(this.props.csvData == null) {
			data = "Nothing to show";
		}
		else {
			data = this.props.csvData;
		}
		return (
			<div className="results-page" style={styles.container}>
				<h1>The results are in!</h1>
		        {/*<form id="result-form" action="/transform_csv" method="post">*/}
		            <RaisedButton 
		            	label="Get Results" 
		            	onClick={this.handleSubmit}>
		            	{/*<input type="submit" id="input" style={{ display: 'none' }} />*/}
		            </RaisedButton>
		        {/*</form>*/}
			</div>
		);
	}
}

export default Result;
