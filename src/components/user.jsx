import React from 'react';

class User extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			loading: true,
			users: [],
			user: {}
		}
	}
	render () {
		return (
			<h1>User {this.props.match.params.user_id}</h1>
		);
	}
}

export default User;
