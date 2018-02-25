import React from 'react';
import {Link} from 'react-router-dom';
import {
	Button,
	Table,
	TableBody,
	TableCell,
	TableHeader,
	TableHeaderCell,
	TableRow
} from 'semantic-ui-react';

class AdminEditTable extends React.Component {
	render = () => (
		<Table sortable={true}>
			<TableHeader>
				<TableRow>
					<TableHeaderCell>
						Admin Interface
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
									{array.user.name}
									{array.user.id}
										<Link className="edit"
											to={`/admin/${array.user.id}`}>Edit</Link>
								</TableCell>
							</TableRow>
						)
				)}
			</TableBody>
		</Table>
	);
}
export default AdminEditTable