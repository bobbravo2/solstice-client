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
		let ActionLink = <Link to={"/log-in"}>Log In</Link>,
		    loggedIn   = false;
		//TODO encapsulate this in the App Redux store. Quick and dirty prototype here.
		if ( isNaN(parseInt(
				this.props.user_id,
				10
			)) ) {
			//Not a valid integer
			if ( 'admin' === this.props.user_id ) {
				ActionLink =
					<Link to={`/admin/`}>Administrator Dashboard</Link>;
				loggedIn = true;
			}
		} else {
			//We have a valid integer
			let userId = parseInt(
				this.props.user_id,
				10
			);
			ActionLink = <Link to={`/user/${userId}`}>My Account</Link>;
			loggedIn = true;
		}
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
										link={true}>
										{ActionLink}
									</Menu.Item>
									{loggedIn ?
										<Menu.Item
											name='log-in'
											link={true}>
											<Link to={"/log-out/"}>
												Log Out</Link>
										</Menu.Item> : null}
									<Menu.Item
										name='about'
										link={true}>
										<Link to={"/about-us"}>
											About Us</Link>
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