import React from 'react';
import User from "./components/user";
import {Route, Switch, Redirect} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import Header from './static/header';
import Footer from './static/footer';
import AboutUs from './static/about-us';
import Home from './static/home';
import LogIn from './components/login';
import Admin from './components/admin';

const Routes = (RouteProps) => (
	<Container>
		<Header user_id={RouteProps.user_id}/>
		<Switch>
			<Route exact path={"/"} component={Home}/>
			<Route exact path={"/log-in/"} render={(props) => {
				return <LogIn
					save_user_id={RouteProps.save_user_id} {...props}/>;
			}}/>
			<Route exact path={"/log-out/"} render={() => {
				RouteProps.clear_user_id();
				return <Redirect to={"/"}/>;
			}}/>
			<Route exact path={"/about-us/"} component={AboutUs}/>
			{/*TODO add REDUX route management for authorized users*/}
			<Route path={"/user/:user_id"} component={User}/>
			<Route path={"/admin/:user_id?"} component={Admin}/>

		</Switch>
		<Footer/>
	</Container>
);

export default Routes;