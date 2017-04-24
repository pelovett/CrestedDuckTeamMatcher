import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

class Result extends Component {
	render() {
		var data;
		if(this.props.csvData == null) {
			data = "Nothing to show";
		}
		else {
			data = this.props.csvData;
		}
		return (
			<div className="results-page">
				<h1>The results are in!</h1>
				<a href="/return-files/" target="blank">
					<RaisedButton className='btn btn-default'>Download!</RaisedButton>
				</a>
				<p>{data}</p>
			</div>
		);
	}
}

export default Result;