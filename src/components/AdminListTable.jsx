import React from 'react';
import {Link} from 'react-router-dom';
import {
	Table,
	TableBody,
	TableCell,
	TableHeader,
	TableHeaderCell,
	TableRow
} from 'semantic-ui-react';

class AdminListTable extends React.Component {
	render = () => (
		<Table sortable={true}>
			<TableHeader>
				<TableRow>
					<TableHeaderCell>
						Customer Name
					</TableHeaderCell>
					<TableHeaderCell>
						Edit User Account
					</TableHeaderCell>
					<TableHeaderCell>
						Log-in as user
					</TableHeaderCell>
				</TableRow>
			</TableHeader>
			<TableBody>
				{this.props.users.map(
					(
						array,
						key
					) =>
						(

							<TableRow key={key}>
								<TableCell>
									<h3>{array.user.name}</h3>
								</TableCell>
								<TableCell>
									<Link className="edit"
									      to={`/admin/${array.user.id}`}>Edit</Link>
								</TableCell>
								<TableCell>
									<Link className="edit"
									      to={`/user/${array.user.id}`}>Log-in</Link>
								</TableCell>
							</TableRow>
						)
				)}
			</TableBody>
		</Table>
	);
}

export default AdminListTable;