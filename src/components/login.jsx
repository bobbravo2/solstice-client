import React from 'react';
import {Button, Form, Grid, Icon, Message} from 'semantic-ui-react';

class User extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			error:    false
		};
		this.handleLogin = this.handleLogin.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleLogin = (event) => {
		//TODO create a real fetch/api method for server side validation ;-)
		if ( this.state.password !== this.state.username ) {
			//Simple validation when both are the same :-P
			this.setState({error: true});
		}
		const dangerouslyHardcodedClientSideValidation = [
			"1152",
			"1158",
			"admin"
		];
		//Named the variable after a similar prop in the react ecosystem.
		if ( -1 !== dangerouslyHardcodedClientSideValidation.indexOf(this.state.password) ) {
			//Valid
			//Save the user ID in the parent app component
			this.props.save_user_id(this.state.password);
			if ( this.state.password === 'admin' ) {
				//redirect to admin view
				this.props.history.push('/admin/');
			} else {
				//redirect to that user view
				let userId = parseInt(
					this.state.password,
					10
				);
				this.props.history.push(`/user/${userId}`);
			}
		} else {
			//Login invalid
			this.setState({error: true});
			setTimeout(
				() => {
					this.setState({error: false});
				},
				3000
			);
		}
	};
	handleChange = (event) => {
		//Reset errors in case the error message hasn't timed out yet.
		this.setState({error: false});

		let value = event.target.value,
		    name  = event.target.name;
		this.setState({[name]: value});
	};

	render () {
		return (
			<Grid columns={2} padded>
				<Grid.Row>
					<Grid.Column>
						<Form onSubmit={this.handleLogin}>
							{this.state.error ?
								<Message error={true} visible={true}><h4>Wrong
									Password/Username. Please try again...</h4>
								</Message> : null}
							<Message info>Demo only - usernames
								are
								1152,
								1158, and admin. Passwords are the same as the
								username</Message>
							<Form.Field>
								<label>Username</label>
								<input name="username" placeholder='1152'
								       value={this.state.username}
								       onChange={this.handleChange}/>
							</Form.Field>
							<Form.Field>
								<label>Password</label>
								<input name="password" placeholder='1152'
								       value={this.state.password}
								       onChange={this.handleChange}/>
							</Form.Field>
							<Button primary type='submit'
							        onClick={this.handleLogin}>
								<Icon name={'sign in'}/>Sign In</Button>
						</Form>
					</Grid.Column>
					<Grid.Column>
						<h3>Learn more about Solstice</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Nullam non purus non odio iaculis convallis.
							Praesent semper mauris sed diam porta mattis.
							Integer quis enim magna, at pellentesque urna. Ut ut
							lorem arcu. Nunc felis erat, vehicula quis
							scelerisque non, gravida nec neque. Suspendisse et
							dui sed tellus sollicitudin facilisis in sit amet
							mi. Mauris gravida mauris quis magna vestibulum vel
							imperdiet lectus dignissim. In aliquet iaculis nisi,
							non sodales metus bibendum quis. Etiam id lobortis
							odio. Nullam non arcu non lectus interdum vestibulum
							eget ut orci. Aenean vulputate nibh id metus
							tincidunt sit amet pharetra lorem suscipit. Nunc
							viverra lectus at neque suscipit a ornare odio
							malesuada.</p>
						<Button secondary floated={'right'} onClick={() => {
							window.open('http://solstice.us/');
						}}>Learn more about us</Button>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default User;
