import React from 'react';
import SkeltonLoader from '../static/SkeltonLoader';
import AdminEditTable from './adminEditTable';
class Admin extends React.Component {
	componentDidMount = () => {
		fetch(`/user/`)
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
					this.setState(
						{
							users:   users,
							loading: false
						}
					);
				}
			);
	};
	render = () => (
		this.state.loading ?
			<SkeltonLoader icon={"table"}/>
			:
			<AdminEditTable users={this.state.users}/>

	);

	constructor (props) {
		super(props);
		this.state = {
			loading: true,
			users:   []
		};
	};
}


export default Admin;