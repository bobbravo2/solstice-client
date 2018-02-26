import React from 'react';
import {
	Button,
	Form,
	FormInput,
	Message,
	Table,
	TableBody,
	TableCell,
	TableHeader,
	TableHeaderCell,
	TableRow
} from 'semantic-ui-react';
import {JsonEditor} from 'react-json-edit';


class AdminEditTable extends React.Component {
	componentDidMount = () => {
		console.log(
			'',
			this.props
		);
	};
	submitNewRecord = (data) => {
		console.log(
			'data',
			data
		);
	};
	render = () => {
		let daysSinceJoin = new Date(this.props.user.user.joined);
		return (
			<Table>
				<TableHeader>
					<TableRow>
						<TableHeaderCell width={6}>
							<h1>Editing User {this.props.user.user.name}</h1>
						</TableHeaderCell>
						<TableHeaderCell>
							Member Since {daysSinceJoin.toDateString()}
						</TableHeaderCell>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell verticalAlign={"top"}>
							<h3>Add new record</h3>
							<Form onSubmit={this.submitNewRecord}>
								<FormInput name={"year"} placeholder={"Year"}/>
								<FormInput name={"month"}
								           placeholder={"Month"}/>
								<FormInput name={"bill"}
								           placeholder={"Bill amount"}/>
								<FormInput name={"savings"}
								           placeholder={"Savings Amount"}/>
								<FormInput name={"solar-kwh"}
								           placeholder={"Solar kWh Usage"}/>
								<FormInput name={"utility-kwh"}
								           placeholder={"Utility kWh Usage"}/>
								<FormInput name={"zip-code"}
								           placeholder={"Zip Code"}/>
								<FormInput control={Button}>Create</FormInput>
							</Form>
						</TableCell>
						<TableCell>
							<Message negative>With great power comes
								great
								responsibility! You are able to delete
								an entire user account from here. Don't
								fret
								though, you can always restore the
								entire
								demo by running the
								`update-records-from-csv.sh` script on
								the
								server.</Message>
							<Message warning>
								The purpose of this demo is to provide a working
								full stack proof of concept to build a larger
								production deployment. There are a number of
								planned future features listed in the README.md.
							</Message>
							<JsonEditor tableLike={true}
							            value={this.props.user}
							            propagateChanges={this.props.saveEditInAdmin}/>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		);
	};
}

export default AdminEditTable;