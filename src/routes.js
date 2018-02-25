import React from 'react';
import User from "./components/user";
import {Route, Switch} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import Header from './static/header';
import Footer from './static/footer';
import LogIn from './components/login';

const Routes = () => (
	<Container>

		<Header/>
		<Switch>
			<Route exact path={"/"} render={() =>
				<h1>Home</h1>
			}/>
			<Route exact path={"/log-in/"} component={LogIn}/>
			<Route path={"/user/:user_id?"} component={User}/>
		</Switch>
		<Footer/>
	</Container>
);

export default Routes;