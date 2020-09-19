import React,{useState} from 'react';
import './pracontact.css';
import swal from 'sweetalert';
// import Form2 from './Form2';


const Practcontact = () => {
	const[data,setData] = useState({
		fullname:'',
		phone:'',
		email:'',
		msg:'',
	});

	const inputEvent = (event) => {
		const{name,value} = event.target;

		setData((preVal) => {
			return{
				...preVal,
				[name] : value,
			}
		});
	}

	const btnSub = (event) => {
		event.preventDefault();
		swal(`Your Details Has been Submitted`);
	}

	return(
		<>
		<div className="my-5">
			<h2 className="text-center" > Contact US </h2>
		</div>

		<div className="container contact_div" >
			<div className="row" >
				<div className="col-md-6 col-10 mx-auto" >
					<form onSubmit={btnSub} >

					<div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">FullName</label>
   <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Enter your name" required/>
					</div>

					<div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Phone</label>
   <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="Mobile Number" required/>
					</div>

					<div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
   <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="Enter your email eg-name@example.com" required/>
					</div>

<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={inputEvent} required></textarea>
</div>

<div className="col-12">
    <button className="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
  <br/>

					</form>
				</div>
			</div>
		</div>
		</>	
		);
}
export default Practcontact;