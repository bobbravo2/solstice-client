import React from 'react';
import {
	Container,
	Grid,
	GridColumn,
	GridRow,
	Image,
	Menu
} from 'semantic-ui-react';
import Logo from '../images/logo.png';
import {Link} from 'react-router-dom';


class Header extends React.Component {
	render () {
		return (
			<header className="landing-header">
				<Container>
					<Grid centered>
						<GridRow>
							<GridColumn computer={3} mobile={16}>
								<Link to='/'>
									<div className="logo">
										<Image src={Logo} size={"small"}/>
									</div>
								</Link>
							</GridColumn>
							<GridColumn computer={13} mobile={16}>
								<Menu>
									<Menu.Item
										name='log-in'
										link={true}
									>
										<Link to={"/log-in"}>Log In</Link>
									</Menu.Item>

									<Menu.Item
										name='reviews'
										link={true}
									>
										<Link to={"/about-us"}>About
											Us</Link>
									</Menu.Item>

								</Menu>
							</GridColumn>
						</GridRow>
					</Grid>
				</Container>
			</header>
		);
	}
}

export default Header;