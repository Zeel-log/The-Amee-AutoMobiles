import React from 'react';
import './router.css';
import {Link} from 'react-router-dom';

const Router = () =>{
	return(
		<>
		<div className="menustyle">
			<ul>
				<li> <Link to="/" > Home </Link> </li>
				<li> <Link to="About" > About </Link> </li>
				<li> <Link to="Contact" > Contact </Link> </li>
			</ul>
		</div>
		</>
		);
}

export default Router;
