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
        <form action="/transform_csv">
            <input type="submit" />
        </form>
			</div>
		);
	}
}

export default Result;
