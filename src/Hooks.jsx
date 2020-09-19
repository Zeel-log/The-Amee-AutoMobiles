import React,{useState} from 'react';
import './hook.css';


const Hook = () =>{

	const state = useState();
// console.log(state);
	const[count,setCount]=useState(0);
	

const IncNum = () =>{
	setCount(count+1);
	// console.log("clicked" + count++); 
}

	return(
		<>
		<div>
		<h1>{count}</h1>
		<button onClick={IncNum} >Click Me!..</button>
		</div>
		</>
		);
}

export default Hook;