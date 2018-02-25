import React from 'react';
import {Dimmer, Icon, Loader, Segment} from 'semantic-ui-react';

/**
 * Stateless loader component. Parent should conditionally render this based on state.
 * props.icon == semantic UI to use for skeleton state
 */
class SkeltonLoader extends React.Component {
	render () {
		return (
			<Segment className={"SkeletonLoader"}>
				<Dimmer active inverted>
					<Loader inverted>Loading</Loader>
					{/*TODO if we have time, add a skeleton state*/}
				</Dimmer>
				<Icon name={this.props.icon} size={"massive"}/>
			</Segment>
		);
	}
}

export default SkeltonLoader;