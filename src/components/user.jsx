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
		// console.log('data', this.state.users[0].records);
		return {
			title:   {
				text:    "My Energy Savings",
				subtext: "An interactive visualization of your energy savings"
			},
			tooltip: {
				trigger: 'axis'
			},
			legend:  {
				show:     true,
				position: 'left'
			},
			grid:    {
				left:         '3%',
				right:        '3%',
				bottom:       '3%',
				top:          '20%',
				containLabel: true
			},
			dataset: {
				dimensions: [
					{
						name: 'timestamp',
						type: 'time'
					},
					{
						name: 'bill',
						type: 'float'
					},
					'savings',
					'zip-code',
					'solar-kwh',
					'utility-kwh'
				],
				source:     this.state.users.records
			},
			xAxis:   {
				type: 'time'
			},
			yAxis:   [
				{
					name:      "",
					position:  'left',
					offset:    '25',
					scale:     true,
					axisLabel: {
						// eslint-disable-next-line
						formatter: '${value}'
					}
				}, {
					type:      'value',
					scale:     true,
					name:      'kWh',
					position:  'right',
					axisLine:  {
						lineStyle: {
							color: '#ddd'
						}
					},
					axisLabel: {
						formatter: '{value} kWh'
					}
				}
			],
			series:  [
				{
					type:      'bar',
					name:      'Bill Amount',
					barWidth:  '20px',
					barGap:    '-100%',
					label:     {
						show:      true,
						position:  'top',
						// eslint-disable-next-line
						formatter: '${@bill}'
					},
					tooltip:   {
						// eslint-disable-next-line
						formatter: '${@}',
					},
					itemStyle: {
						color: '#333333'
					},
					encode:    {
						x: 'timestamp',
						y: 'bill'
					}
				},
				{
					type:      'bar',
					name:      "Solar Savings",
					barWidth:  '20px',
					barGap:    '-100%', //Using bar gap instead of Stacked for these due to the way ECharts renders negative values.
					itemStyle: {
						color: 'green'
					},
					encode:    {
						x: 'timestamp',
						y: 'savings'
					}
				},
				{
					type:       'line',
					name:       "Solar Usage",
					barWidth:   '20px',
					barGap:     '50%',
					yAxisIndex: 1,
					label:      {
						show:      false,
						position:  'top',
						formatter: '{@solar-kwh} kWh'
					},
					itemStyle:  {
						color: 'green'
					},
					encode:     {
						x: 'timestamp',
						y: ['solar-kwh', 'utility-kwh']
					}
				},
				{
					type:       'line',
					name:       "Utility Usage",
					barWidth:   '20px',
					barGap:     '50%',
					yAxisIndex: 1,
					label:      {
						show:      false,
						position:  'top',
						formatter: '{@solar-kwh} kWh'
					},
					itemStyle:  {
						color: 'brown'
					},
					encode:     {
						x: 'timestamp',
						y: 'utility-kwh'
					}
				}
			]
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
		let userId = '';
		if ( this.props.match.params.user_id ) {
			//Extract the user id from react router when we have one
			userId = this.props.match.params.user_id;
		}
		fetch(`/user/${userId}`)
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

	}

	render () {
		return (
			this.state.loading ?
				<SkeltonLoader icon={"bar chart"}/>
				:
				<div>
					<ReactEcharts option={this.getChartOptions()}
					              style={{height: '400px'}}/>
					<h1>User {this.props.match.params.user_id}</h1>
				</div>
		);
	}
}

export default User;
