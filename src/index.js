import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import Stuff from './components/stuff';
import Contact from './components/contact';

import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import App from './components/app';

const app = document.getElementById('app');
ReactDOM.render(
	<Router>
    	<Route path="/" component={App} >
	 		<IndexRoute component={Home}/>
	 		<Route path='stuff' component={Stuff} />
	 		<Route path='contact' component={Contact} />

	 	</Route>
  	</Router>, 

	app


	);
