import React,{useState} from 'react';
import './login.css';

const Login = () => {

const [name,setName] = useState();
const [fulName,setfulName] = useState();
const [pass,setPass] = useState();
const [newpass,setNewPass] = useState();

const Event = (event) => {
		// console.log(event.target.value);
		setName(event.target.value);
	}

const Chng = (event) => {
	event.preventDefault();//HOLDS FORM DATA 
	setfulName(name);
	setNewPass(pass);
}

const EventTwo = (event) => {
	setPass(event.target.value);
}

	return(
		<>
		<div className="main">
		<form onClick={Chng}>
		<div>
		<h1>Hello {fulName} {newpass} </h1>
		<input type="text" placeholder="Enter your Name" onChange={Event} value={name} />
		<input type="text" placeholder="Enter your Password" onChange={EventTwo} value={pass} />
		<br/>
		<button type="Submit">Submit</button>
		</div>
		</form>
		</div>
		</>
		);

}
export default Login;