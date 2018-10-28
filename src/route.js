import React from 'react';
import { Route,HashRouter} from 'react-router-dom';
import App from './container/App.js';
import About from './container/about.js';
import About1 from './container/about1.js';
import About2 from './container/about2.js';
import Msg from './container/msg.js';
import Detail from './container/detail.js'
import Calculator from './container/Calculator.js';

export default class Routers extends React.Component {
	render() {
		return (
			<HashRouter >
				<div>
			  	  <Route exact path="/"  component={App} />
			      <Route path="/about" component={About} />
			      <Route path="/about/about1" component={About1} />
			      <Route path="/about/about2" component={About2} />
			      <Route path="/msg" component={Msg} />
			      <Route path="/detail/:id/:type" component={Detail} />
				  <Route path="/calculator" component={Calculator} />
		 		 </div>
			</HashRouter>

		)
	}
}
