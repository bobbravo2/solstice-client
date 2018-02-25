import React from 'react';
import User from "./components/user";
import {Route, Switch} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import Header from './static/header';
import Footer from './static/footer';
import AboutUs from './static/about-us'
import Home from './static/home';
import LogIn from './components/login';

const Routes = () => (
	<Container>
		<Header/>
		<Switch>
			<Route exact path={"/"} component={Home}/>
			<Route exact path={"/log-in/"} component={LogIn}/>
			<Route exact path={"/about-us/"} component={AboutUs}/>

			<Route path={"/user/:user_id?"} component={User}/>
		</Switch>
		<Footer/>
	</Container>
);

export default Routes;