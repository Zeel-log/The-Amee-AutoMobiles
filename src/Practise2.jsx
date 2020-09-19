import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Practhome from './Practhome';
import Practabout from './Practabout';
import Practservices from './Practservices';
import Practcontact from './Practcontact';
import Pracnavbar from './Pracnavbar';
import Footer from './Footer';
// import './practise2.css';
import {Switch,Route,Redirect} from 'react-router-dom';

const Practise2 = () => {
	return(
		<>
		<Pracnavbar/>
		<Switch>
		<Route exact path="/" component={Practhome} />
		<Route exact path="/about" component={Practabout} />
		<Route exact path="/service" component={Practservices} />
		<Route exact path="/contact" component={Practcontact} />
		<Redirect to="/" />
		</Switch>
		<Footer/>
		</>
		);
}

export default Practise2;