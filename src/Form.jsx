import React,{ Component } from 'react';
import swal from 'sweetalert';
import './form.css';

class Form extends Component{

	constructor(props){
		super(props);
		this.state = {fullname:"zeel",email:"zeel@gmail.com",mob:"98675465",mess:"Do not forget to Subscribe"}	
	}

	// handlename = (event) => {
	// 	this.setState({ fullname: event.target.value })
	// 	// console.log(event.target.value);
	// }
	// handleemail = (event) => {
	// 	this.setState({ email: event.target.value })
		
	// }
	// handlenumber = (event) => {
	// 	this.setState({ mob: event.target.value })
		
	// }
	// handlemsg = (event) => {
	// 	this.setState({ mess: event.target.value })
		
	// }

	handlechangeall = (event) => {
		this.setState({[event.target.name]:event.target.value})
	}

	handlesubmit = (event) => {
		event.preventDefault();
		swal(`Form Submitted ${this.state.fullname}  ${this.state.email}`);
		// OR CN WRITE ==
		// swal(JSON.stringify(this.state));
	}

	render(){
		return(
			<div>
				<form onSubmit={this.handlesubmit} >
				<label> FullName </label> <br/>
				<input type="text" value={this.state.fullname} name="fullname" onChange={this.handlechangeall} /> <br/>
				<label> Email </label> <br/>
				<input type="email" value={this.state.email} name="email" onChange={this.handlechangeall} /> <br/>
				<label> Mobile no </label> <br/>
				<input type="number" value={this.state.mob} name="mob" onChange={this.handlechangeall} /> <br/>
				<label> Message </label> <br/>
				<textarea value={this.state.mess} name="mess" onChange={this.handlechangeall} ></textarea> <br/>
				<input type ="submit" value="Send" />
				</form>
			</div>
			);
	}

}
export default Form;