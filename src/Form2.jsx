import React,{ Component } from 'react';
import swal from 'sweetalert';
import './form2.css';

class Form2 extends Component{
	constructor(props){
		super(props);
		this.state = {Name:'zeel',Email:'',Mob:'',Mess:''}
		// this.state = {Email:'zeel@gmnail.com'}
	}
	handename = (event) => {
		this.setState({Name:event.target.value})
		
	}
	handlemail = (event) =>{
		this.setState({Email:event.target.value})
	}
	handlemob =(event) => {
		this.setState({Mob:event.target.value})
	}
	handlemes = (event) => {
		this.setState({Mess:event.target.value})
	}

	handlesubmit = (event) => {
		event.preventDefault();
		swal(`Form Submitted ${this.state.Name}`);
	}

// FOR ONE LINE INPUT VALUE INSTEAD OF WRITING ONCHANGE IN DIFF FUNCTON==
	// handleall = () => {
	// 	this.setState({[event.target.name]:event.target.value})
	// }

	render(){
		return(
		<div>
			<form onSubmit={this.handlesubmit} >
				<label> Name: </label><br/>
					<input type="text" value={this.state.Name} onChange={this.handename} /><br/>
				<label> Email: </label><br/>
					<input type="email" value={this.state.Email} onChange={this.handlemail} /><br/>
				<label> Phone: </label>
					<input type="number" value={this.state.Mob} onChange={this.handlemob} /><br/>
				<label> Message </label><br/>
					<textarea value={this.state.Mess} onChange={this.handlemes} > </textarea><br/>
				<input type="submit" value="Send" />
			</form>
		</div>
		);
	}
}
export default Form2;