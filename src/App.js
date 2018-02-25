import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';
import 'semantic-ui-css/semantic.min.css';
import './static/app.css';

class App extends Component {
	render () {
		return (
			<div>
				<Router>
					<Routes/>
				</Router>
			</div>
		);
	}
}

export default App;
