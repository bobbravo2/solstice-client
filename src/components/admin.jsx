import React from 'react';
import SkeltonLoader from '../static/SkeltonLoader';
import AdminListTable from './AdminListTable';
import AdminEditTable from './AdminEditTable';

class Admin extends React.Component {
	saveEdit = (data) => {
		console.log(
			'Saving data in Admin',
			data
		);
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
		fetch(`/user/${user_id}`)
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
						this.setState({users: users});
					} else {
						//Just one user, keep this so react re-renders the dom on route change
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
		//Hack for react router to force re-rendering of the component. FIXME with Redux with more time ;-)
		if ( this.props.match.params.user_id !== nextProps.match.params.user_id ) {
			console.log('STALE');
			this.setState({loading: true});
			let userId = '';
			if ( undefined !== nextProps.match.params.user_id ) {
				userId = parseInt(nextProps.match.params.user_id);
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
					<AdminEditTable user={this.state.user}/>
					:
					<AdminListTable users={this.state.users}/>
			)

	);

	constructor (props) {
		super(props);
		this.state = {
			loading: true,
			users:   []
		};
		this.saveEdit = this.saveEdit.bind(this);
		this.fetchUserData = this.fetchUserData.bind(this);//Stupid JS.
	};
}


export default Admin;