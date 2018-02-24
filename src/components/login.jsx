import React from 'react';
import {Button, Checkbox, Form, Message, Icon} from 'semantic-ui-react';

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
			<Form onSubmit={this.onSubmit}>
				<Message info>Demo only - usernames are 1152, 1158, and admin. Passwords are the same as the username</Message>
				<Form.Field>
					<label>Username</label>
					<input name="username" placeholder='1152'/>
				</Form.Field>
				<Form.Field>
					<label>Password</label>
					<input name="password" placeholder='1152'/>
				</Form.Field>
				<Button primary icon={<Icon name={'sign in'}/>}
					type='submit'>Sign In</Button>
			</Form>
		);
	}
}

export default User;
