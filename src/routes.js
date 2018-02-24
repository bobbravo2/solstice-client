import React from 'react';
import User from "./components/user";
import {Route, Switch} from 'react-router-dom';
import Header from './static/header';
import Footer from './static/footer';
import LogIn from './components/login';
const Routes = () => (
	<div className="app">
		<Header/>
		<Switch>
			<Route exact path={"/"} render={() =>
				<h1>Home</h1>
			}/>
			<Route exact path={"/log-in/"} component={LogIn}/>
			<Route path={"/user/:user_id?"} component={User}/>
		</Switch>
		<Footer/>
	</div>
);

export default Routes;