import React from 'react';
import {Container, Image, Menu} from 'semantic-ui-react';
import Logo from '../images/logo.png';
import {Link} from 'react-router-dom';


class Header extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			'hidden':        false,
			'lastScrollTop': 0
		};
		this.handleScroll = this.handleScroll.bind(this);
	}

	handleScroll (event) {
		//TODO look into encapsulating ScrollTop for react-native
		const scrollTop = event.target.documentElement.scrollTop;
		//Log it
		//Check current state against our lastScrollTop value
		if ( scrollTop <= 30 ) {
			//If scrollTop > lastScrollTop we're moving up the page, show the main menu
			// console.log('Going UP?');
			this.setState({'hidden': false});
		} else {
			// else we're moving down the page, hide the main menu
			this.setState({'hidden': true});
			// console.log('Going down?');
		}
		console.log(
			'Scroll event',
			event,
			scrollTop
		);
		this.setState({'lastScrollTop': scrollTop});
	}

	componentDidMount () {
		if ( typeof window === 'object' ) {
			//Only bind for react-dom implementations
			//TODO implement scroll detection for React-Native
			window.addEventListener(
				'scroll',
				this.handleScroll
			);
		}
	}

	componentWillUnmount () {
		if ( typeof window === 'object' ) {
			window.removeEventListener(
				'scroll',
				this.handleScroll
			);
		}
	}

	render () {
		return (
			<header className="landing-header" style={{
				boxShadow: !this.state.hidden ? 'none' : '0px -1px 5px 0px' +
					' rgba(0,0,0,0.75)'
			}}>
				<Container>
					<div className="landing-header-container">
						<Link to='/'>
							<div className="logo">
								<Image src={Logo} fluid={true} size={'small'}/>
							</div>
						</Link>

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
								<Link to={"/about-us"}>About Us</Link>
							</Menu.Item>

						</Menu>
					</div>
				</Container>
			</header>
		);
	}
}

export default Header;