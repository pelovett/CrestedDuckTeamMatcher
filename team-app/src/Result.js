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
		return (
			<div className="results-page">
				<h1>The results are in!</h1>
				<a href="/return-files/" target="blank">
					<RaisedButton className='btn btn-default'>Download!</RaisedButton>
				</a>
			</div>
		);
	}
}

export default Result;