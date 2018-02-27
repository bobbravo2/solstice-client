import React from 'react';
import SkeltonLoader from '../static/SkeltonLoader';
import AdminListTable from './AdminListTable';
import AdminEditTable from './AdminEditTable';

class Admin extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			loading: true,
			error:   false,
			success: false,
			saving:  false,
			users:   [],
			user:    {}
		};
		this.saveEdit = this.saveEdit.bind(this);
		this.fetchUserData = this.fetchUserData.bind(this);
	};

	saveEdit = (data) => {
		console.log(
			'Saving data in Admin',
			data
		);
		this.setState({saving: true});
		fetch(
			'/api/',
			{
				body:        JSON.stringify(data),
				cache:       'no-cache',
				credentials: 'include',
				headers:     {
					'content-type': 'application/json'
				},
				method:      'POST',
				mode:        'cors',
				redirect:    'error'
			}
		)
			.then(
				response => response.json())
			.then(
				(response) => {
					this.setState({saving: false});
					if ( response.error ) {
						//Server validation errors
						console.log(
							'err',
							response.error
						);
						this.setState({error: response.error});
					} else {
						this.setState({error: false});
						this.setState({success: true});
					}
					setTimeout(
						() => {
							this.setState({
								              error:   false,
								              success: false
							              });
						},
						3000
					);
				}
			)
			.catch(
				(error) => {
					console.log(
						'caugght err',
						error
					);

				});

		this.setState({user: data});
	};
	componentDidMount = () => {
		console.log('componentDidMount');
		let userId = '';
		if ( this.props.match.params.user_id ) {
			//Extract the user id from react router when we have one
			userId = this.props.match.params.user_id;
			this.fetchUserData(userId);
		} else {
			this.fetchUserData();
		}

	};
	fetchUserData = (user_id = "") => {
		console.log(
			'fetchUserData',
			user_id
		);
		fetch(`/api/user/${user_id}`)
			.catch((err) => {
				console.error(
					'Unhandled Fetch Exception: ',
					err
				);
			})
			.then(
				response => response.json())
			.then(
				users => {
					console.log(
						'this',
						this.props
					);
					if ( '' === user_id ) {
						//Multiple records
						//Actual production response would be cleaned up for performance,
						// the below call getting more data for one user
						this.setState({users: users});
					} else {
						//Just one user, keep this so react re-renders the dom on route change
						//Also so we can only fetch one record as this scales
						this.setState({user: users});
					}
					this.setState({loading: false});
				}
			);
	};
	componentWillReceiveProps = (nextProps) => {
		console.log(
			'nextProps',
			nextProps
		);
		//Hack for react router to force re-rendering of the component. FIXME use Redux with more time ;-)
		if ( this.props.match.params.user_id !== nextProps.match.params.user_id ) {
			console.log('StSTALE');
			this.setState({loading: true});
			let userId = '';
			if ( undefined !== nextProps.match.params.user_id ) {
				userId = parseInt(
					nextProps.match.params.user_id,
					10
				);
			}
			this.fetchUserData(userId);
		}
		return nextProps;
	};
	render = () => (
		this.state.loading ?
			<SkeltonLoader icon={"table"}/>
			:
			(
				this.props.match.params.user_id ?
					<AdminEditTable user={this.state.user}
					                error={this.state.error}
					                success={this.state.success}
					                saving={this.state.saving}
					                saveEditInAdmin={this.saveEdit}/>
					:
					<AdminListTable users={this.state.users}/>
			)

	);
}


export default Admin;