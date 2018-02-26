import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';
import 'semantic-ui-css/semantic.min.css';
import './static/app.css';

class App extends Component {
	constructor () {
		super();
		//Replace with a REDUX store and server side validation.
		let userID = window.localStorage.getItem('userID');
		this.state = {
			user_id: userID
		};
		this.saveUserID = this.saveUserID.bind(this);
		this.clearUserID = this.clearUserID.bind(this);
	}

	saveUserID = (userID) => {
		this.setState({user_id: userID});
		window.localStorage.setItem(
			'userID',
			userID
		);
	};
	clearUserID = () => {
		this.setState({user_id: null});
		window.localStorage.removeItem('userID');
	};

	render () {
		return (
			<div>
				<Router>
					<Routes user_id={this.state.user_id}
					        save_user_id={this.saveUserID}
					        clear_user_id={this.clearUserID}/>
				</Router>
			</div>
		);
	}
}

export default App;
