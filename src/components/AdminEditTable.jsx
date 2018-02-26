import React from 'react';
import {Link} from 'react-router-dom';
import {
	Button,
	Form,
	FormGroup,
	FormInput,
	Icon,
	Label,
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
	constructor (props) {
		super(props);
		this.submitNewRecord = this.submitNewRecord.bind(this);
		let fullYear = new Date().getFullYear();
		let month = (new Date().getMonth() + 1); //JS uses 0 index month;
		this.state = {
			//Namespace the state object so we can quickly serialize it
			// while having other state properties for UX
			create:        {
				year:          fullYear,
				month:         month,
				bill:          0,
				savings:       0,
				"solar-kwh":   0,
				"utility-kwh": 0,
				"zip-code":    ''
			},
			createTouched: false
		};
	};

	handleCreateRecordChange = (event) => {
		let name  = event.target.name,
		    value = event.target.value;
		this.setState({"create": {[name]: value}});
		this.setState({createTouched: true});
	};
	submitNewRecord = (data) => {
		console.log(
			'data',
			this.state.create
		);
		fetch(
			`/admin/${this.props.user.user.id}/create`,
			{
				body:        JSON.stringify(this.state.create),
				cache:       'no-cache',
				credentials: 'include',
				headers:     {
					'content-type': 'application/json'
				},
				method:      'POST',
				mode:        'cors',
				redirect:    'error'
			}
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
						<TableHeaderCell>
							<Link to={`/user/${this.props.user.user.id}`}>View
								Member Dashboard</Link>
						</TableHeaderCell>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell verticalAlign={"top"}>
							<h3>Add new record</h3>
							<Form onSubmit={this.submitNewRecord}>
								<FormGroup>
									<FormInput name={"year"} label={"Year"}
									           value={this.state.create.year}
									           width={3}
									           onChange={this.handleCreateRecordChange}/>
									<FormInput name={"month"}
									           label={"Month"}
									           width={3}
									           value={this.state.create.month}
									           onChange={this.handleCreateRecordChange}/>
									<FormInput name={"zip-code"}
									           label={"Zip Code"}
									           width={5}

									           value={this.state.create['zip-code']}
									           onChange={this.handleCreateRecordChange}/>
								</FormGroup>
								<FormGroup>
									<FormInput name={"bill"}
									           label={"Bill amount"}
									           labelPosition='left'
									           value={this.state.create.bill}
									           onChange={this.handleCreateRecordChange}>
										<Label>$</Label>
										<input/>
									</FormInput>
									<FormInput name={"savings"}
									           label={"Savings Amount"}
									           labelPosition='left'
									           value={this.state.create.savings}
									           onChange={this.handleCreateRecordChange}>
										<Label>$</Label>
										<input/>
									</FormInput>
								</FormGroup>
								<FormGroup>
									<FormInput name={"solar-kwh"}
									           labelPosition='right'
									           label={"Solar kWh Usage"}
									           value={this.state.create['solar-kwh']}
									           onChange={this.handleCreateRecordChange}>
										<Label icon={"sun"} basic/>
										<input/>
										<Label>kWh</Label>
									</FormInput>
									<FormInput name={"utility-kwh"}
									           label={"Utility kWh Usage"}
									           labelPosition='right'
									           value={this.state.create['utility-kwh']}
									           onChange={this.handleCreateRecordChange}>
										<Label icon={"factory"} basic/>
										<input/>
										<Label>kWh</Label>
									</FormInput>
								</FormGroup>

								<FormInput control={Button}>Create</FormInput>
							</Form>
						</TableCell>
						<TableCell>
							<Message success>
								Edit the user account below by clicking on any
								values that you want to change. Press [ENTER] to
								save.
							</Message>
							{this.props.error ? <Message error
							                             floating>{this.props.error}</Message> : null}
							{this.props.success ?
								<Message success>Saved</Message> : null}
							{this.props.saving ? <Message icon info>
								<Icon name='circle notched' loading/>
								<Message.Content>
									<Message.Header>Saving...</Message.Header>
									Keeping your user data safe and sound.
								</Message.Content>
							</Message> : null}
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