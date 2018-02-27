import React from 'react';
import ReactEcharts from 'echarts-for-react';
import SkeltonLoader from '../static/SkeltonLoader';
import {
	Button,
	Card,
	CardContent,
	CardDescription,
	Grid,
	GridColumn,
	GridRow,
	Statistic
} from 'semantic-ui-react';

class User extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			loading: true,
			users:   []
		};
	}

	getDataSet = () => {
		return {
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
		};
	};
	getUsageHistoryChartOptions = () => {
		return {
			title:   {
				text:    this.state.users.user.name + "'s Energy Usage",
				subtext: "An interactive visualization of your energy usage"
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
			dataset: this.getDataSet(),
			xAxis:   {
				type: 'time'
			},
			yAxis:   [
				{
					name:      "kWH",
					position:  'left',
					offset:    '25',
					scale:     true,
					axisLabel: {
						// eslint-disable-next-line
						formatter: '{value} kWh'
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
						y: ['solar-kwh']
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
	getUsagePieChartOptions = () => {
		return {
			title:   {},
			tooltip: {
				trigger:   'item',
				formatter: '{c} kWh'
			},
			legend:  {
				show: false
			},
			grid:    {
				left:         '3%',
				right:        '3%',
				bottom:       '3%',
				top:          '20%',
				containLabel: true
			},
			xAxis:   {},
			yAxis:   {},
			series:  [
				{
					type: 'pie',
					name: "Usage",
					data: [
						{
							value: this.state.users.totalSolar,
							name:  "Solar"
						},
						{
							value: this.state.users.totalUtility,
							name:  "Utility"
						}
					]
				}
			]
		};
	};
	getSavingsChartOptions = () => {
		// console.log('data', this.state.users[0].records);
		return {
			title:   {
				text: this.state.users.user.name + "'s Savings by Month"
			},
			tooltip: {
				trigger:   'axis',
				formatter: (data) => {
					let label = '';
					if ( parseInt(
							data[0].value['savings'],
							10
						) === 0 ) {
						//No savings before joining
						label = 'Before joining Solstice, you saved $0';
					} else {

						label = '$' + data[0].value['savings'] + ' saved!';
					}
					return label;
				}
			},
			legend:  {
				show: false
			},
			grid:    {
				left:         '3%',
				right:        '3%',
				bottom:       '3%',
				top:          '20%',
				containLabel: true
			},
			dataset: this.getDataSet(),
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
				}
			],
			series:  [
				{
					type:      'bar',
					name:      "Solar Savings",
					// barWidth:  '20px',
					barGap:    '-100%', //Using bar gap instead of Stacked for these due to the way ECharts renders negative values.
					itemStyle: {
						color: 'green'
					},
					encode:    {
						x: 'timestamp',
						y: 'savings'
					}
				}
			]
		};
	};
	getChartOptions = () => {
		return {
			title:   {
				text:    this.state.users.user.name + "'s Savings",
				subtext: "An interactive visualization of your energy usage and savings"
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
			dataset: this.getDataSet(),
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
						formatter: '${@}'
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

	componentDidMount () {
		let userId = '';
		if ( this.props.match.params.user_id ) {
			//Extract the user id from react router when we have one
			userId = this.props.match.params.user_id;
		}
		fetch(`/api/user/${userId}`)
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
		//Translate this to our UX for the perspective of how much a user has saved vs. graphically
		let humanCash = Math.round(Math.abs(parseFloat(this.state.users.totalSavings)) * 100) / 100;
		return (
			this.state.loading ?
				<SkeltonLoader icon={"bar chart"}/>
				:
				<Grid>
					<GridRow>
						<GridColumn>
							<ReactEcharts option={this.getChartOptions()}
							              style={{height: '400px'}}/>
						</GridColumn>
					</GridRow>
					<GridRow>
						<GridColumn computer={12} mobile={16}>
							<ReactEcharts option={this.getSavingsChartOptions()}
							              style={{height: '400px'}}/>
						</GridColumn>
						<GridColumn computer={4} mobile={16}>
							<Card>
								<CardContent>
									<Card.Header>
										Total Savings
									</Card.Header>
									<CardDescription>
										<Statistic horizontal color={"green"}>
											<Statistic.Value>${humanCash}</Statistic.Value>
											<Statistic.Label>By using
												Solar</Statistic.Label>
										</Statistic>
										<Statistic horizontal color={"grey"}>
											<Statistic.Value>{this.state.users.totalMetricTonsCO2Avoided}</Statistic.Value>
											<Statistic.Label>Metric Tons of CO2
												Saved</Statistic.Label>
										</Statistic>
										<h3>Want to save even more?</h3>
										<Button className="ambassador">Join our
											Solstice
											Ambassador&trade; program to save
											even
											more</Button>
									</CardDescription>
								</CardContent>
							</Card>
						</GridColumn>
					</GridRow>
					<GridRow>
						<GridColumn computer={4} mobile={16}>
							<Card>
								<CardContent>
									<Card.Header>
										Total Usage
									</Card.Header>
									<ReactEcharts
										option={this.getUsagePieChartOptions()}
										style={{height: '200px'}}/>
									<CardDescription>
										Proportion of your solar usage vs.
										Electric
										Utility
									</CardDescription>
								</CardContent>
							</Card>
						</GridColumn>
						<GridColumn computer={12} mobile={16}>
							<ReactEcharts
								option={this.getUsageHistoryChartOptions()}
								style={{height: '400px'}}/>

						</GridColumn>
					</GridRow>
				</Grid>
		);
	}
}

export default User;
