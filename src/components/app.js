import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';


import Home from './home';
let App = React.createClass({


	render : function(){

		return(
				<div>
					<h1>Simple React routing app</h1>
					<ul className="header">
			          	<li><Link to="/">Home</Link></li>
  						<li><Link to="/stuff">Stuff</Link></li>
          				<li><Link to="/contact">Contact</Link></li>

					</ul>
					<div className ='content'>
						{this.props.children}
 					</div>
				</div>
			);

	}
});

export default App;