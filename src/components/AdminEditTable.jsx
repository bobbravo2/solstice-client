import React from 'react';
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderCell,
	TableRow
} from 'semantic-ui-react';

class AdminEditTable extends React.Component {
	componentDidMount = () => {
		console.log(
			'',
			this.props
		);
	};
	render = () => {
		let daysSinceJoin = new Date(this.props.user.user.joined);
		return (
			<Table sortable={true}>
				<TableHeader>
					<TableRow>
						<TableHeaderCell>
							Editing User {this.props.user.user.name}
						</TableHeaderCell>
						<TableHeaderCell>
							Member Since {daysSinceJoin.toDateString()}
						</TableHeaderCell>
					</TableRow>
				</TableHeader>
				<TableBody>

				</TableBody>
			</Table>
		);
	};
}

export default AdminEditTable;