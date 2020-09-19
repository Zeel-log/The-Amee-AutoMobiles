import React from 'react';
import {add,sub,mul,div} from './Cal';

function Calsasa(){
	return(
		<>
		<ol>
	<li> The Sum of Two Number is {add(40,4)} </li>
	<li> The Subtraction of two_no {sub(40,4)} </li>
	<li> The Multiplication of two_no {mul(40,4)} </li>
	<li> The Division of two_no {div(40,4)} </li>
	</ol>
		</>
		);
}

export default Calsasa;