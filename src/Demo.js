import React,{component} from 'react';
import ReactDOM from 'react-dom';
import './demo.css';

// using functional & how to write props================================

const Demo = (props) =>{
render()
{
		return(
			<div className="maindiv_style">
			<h1>welcome to React{props.name}<h1>
			<p>Welcome..</p>
			</div>
			)
}
}

// OR cn write this way also USING PROPS===========================================

// const Demo = ({name}) =>{
// render(){
// 		return 
		
// 			<div className="maindiv_style">
// 			<h1>welcome to React {name}<h1>
// 			<p>Welcome..</p>
// 			</div>
		
			
// 	}
// }


// using class component ===============================

// class Demo extends component{
// 	render(){
// 		return( 
// 			<div className="maindiv_style">
// 			<h1>welcome to React<h1>
// 			<p>Welcome..</p>
// 			</div>
// 		)
			
// 	}
// }
export default Demo;