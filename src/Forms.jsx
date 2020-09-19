import React,{useState} from 'react';
import './forms.css';

const App = () => {
	const [fullName,setFullName] = useState({
		fname:"",
		lname:"",
		email:"",
		mobile:"",
	});
	

	const inputEvent = (event) => {
		// console.log(event.target.value);
		// console.log(event.target.name);
		// console.log(event.target.placeholder);

		// const value = event.target.value;
		// const name = event.target.name;
		const {value,name} = event.target;

		setFullName((preValue)=>{
			// console.log(preValue);

			return{
				...preValue,
				[name]:value,
			};

			// if(name === "fName"){
			// 	return{
			// 		fname:value,
			// 	    lname:preValue.lname,
			// 	};
			// }
			// else if(name === "lName")
			// {
			// 	return{
			// 		fname:preValue.fname,
			// 		lname:value,
			// 	};	
			// }
			// else if(name === "iEmail")
			// {
			// 	return{
			// 		fname:preValue.fname,
			// 		lname:preValue.lname,
			// 		email:value,
			// 	};
			// }
			// else if(name === "mobile")
			// {
			// 	return{
			// 		fname:preValue.fname,
			// 		lname:preValue.lname,
			// 		email:preValue.email,
			// 		mob:value,
			// 	};
			// }
		});
		
	}

	const Chng = (event) => {
		event.preventDefault();
		// alert('Form Submitted');
	}

	return(
		<>
		<form onClick={Chng}>
		<div>
		<h1>Hello {fullName.fname} {fullName.lname} Welcome to Form</h1>
		<p> {fullName.email} </p>
		<p> {fullName.mobile} </p>
		<input type="text" placeholder="Enter Your Name" onChange={inputEvent} name='fname' value={fullName.fname} />
		<input type="text" placeholder="Enter Your LastName" onChange={inputEvent} name='lname' value={fullName.lname} />
		<input type="text" placeholder="Enter Your Email" onChange={inputEvent} name='email' value={fullName.email} />
		<input type="text" placeholder="Enter Your Mobile" onChange={inputEvent} name='mobile' value={fullName.mobile} />
		<button>Click Me!.</button>
		</div>
		</form>
		</>
		);
}

export default App;