import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import SkeltonLoader from '../static/SkeltonLoader';


echarts.registerTheme(
	'solstice',
	{
		backgroundColor: '#ddd'
	}
);

class User extends React.Component {
	getChartOptions = () => {
		return {
			title:   {
				text:    "Hello World",
				subtext: "An interactive visualization of your energy savings"
			},
			dataset: {
				source: [{foo: 122}, {foo: 188}]
			}
		};
	};

	constructor (props) {
		super(props);
		this.state = {
			loading: true,
			users:   []
		};
	}

	componentDidMount () {
		fetch('/user')
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
	}

	render () {
		return (
			this.state.loading ?
				<SkeltonLoader icon={"bar chart"}/>
				:
				<div>
					<ReactEcharts option={this.getChartOptions()}/>
					<h1>User {this.props.match.params.user_id}</h1>
				</div>
		);
	}
}

export default User;
