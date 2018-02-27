import React from 'react';
import {Container, Grid, Image} from 'semantic-ui-react';
import LogoWithTagline from '../images/logo-with-tag.png';

export default () => (
	<Container>
		<Grid columns={1} padded>
			<Grid.Column>
				<h3>Solstice ENERGY Portal</h3>
				<Grid.Row style={{position: "relative"}}>
					<video style={{maxWidth: "100%"}} loop="loop" preload="auto"
					       autoPlay={true} playsInline={true}>
						<source type="video/mp4"
						        src="https://d2ffutrenqvap3.cloudfront.net/items/1T0u2Q0L3Z1z3V2b1E1s/NTO_H.mp4"/>
					</video>
					<Image fluid src={LogoWithTagline} style={{
						position: "absolute",
						top:      "10%",
						left:     0,
						right:    0,
						margin:   "0 auto",
						maxWidth: '520px'
					}}/>
				</Grid.Row>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nullam non
					purus non odio iaculis convallis. Praesent semper mauris sed
					diam
					porta mattis. Integer quis enim magna, at pellentesque urna.
					Ut ut
					lorem arcu. Nunc felis erat, vehicula quis scelerisque non,
					gravida
					nec neque. Suspendisse et dui sed tellus sollicitudin
					facilisis in
					sit amet mi. Mauris gravida mauris quis magna vestibulum vel
					imperdiet lectus dignissim. In aliquet iaculis nisi, non
					sodales
					metus bibendum quis. Etiam id lobortis odio. Nullam non arcu
					non
					lectus interdum vestibulum eget ut orci. Aenean vulputate
					nibh id
					metus tincidunt sit amet pharetra lorem suscipit. Nunc
					viverra
					lectus at neque suscipit a ornare odio malesuada.</p>
			</Grid.Column>
		</Grid>
	</Container>
);
