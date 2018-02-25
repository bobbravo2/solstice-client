import React from 'react';
import {Button, Container, Form, Grid, Icon, Message} from 'semantic-ui-react';

class User extends React.Component {
	render () {
		return (
			<Grid columns={2} padded>
				<Grid.Row>
					<Grid.Column>
						<Form onSubmit={this.onSubmit}>
							<Message info compact={true}>Demo only - usernames
								are
								1152,
								1158, and admin. Passwords are the same as the
								username</Message>
							<Form.Field>
								<label>Username</label>
								<input name="username" placeholder='1152'/>
							</Form.Field>
							<Form.Field>
								<label>Password</label>
								<input name="password" placeholder='1152'/>
							</Form.Field>
							<Button primary type='submit'>
								<Icon name={'sign in'}/>Sign In</Button>
						</Form>
					</Grid.Column>
					<Grid.Column>
						<h3>Learn more about Solstice</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non purus non odio iaculis convallis. Praesent semper mauris sed diam porta mattis. Integer quis enim magna, at pellentesque urna. Ut ut lorem arcu. Nunc felis erat, vehicula quis scelerisque non, gravida nec neque. Suspendisse et dui sed tellus sollicitudin facilisis in sit amet mi. Mauris gravida mauris quis magna vestibulum vel imperdiet lectus dignissim. In aliquet iaculis nisi, non sodales metus bibendum quis. Etiam id lobortis odio. Nullam non arcu non lectus interdum vestibulum eget ut orci. Aenean vulputate nibh id metus tincidunt sit amet pharetra lorem suscipit. Nunc viverra lectus at neque suscipit a ornare odio malesuada.</p>
						<Button secondary floated={'right'} onClick={() => {
							window.open('http://solstice.us/')
						}}>Learn more about us</Button>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default User;
