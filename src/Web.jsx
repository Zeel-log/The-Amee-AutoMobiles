import React,{useState} from 'react';
import './web.css';


const Web = () => {

	const[fname,setFname] = useState();
	const[fnames,setFnames] = useState();


	const f_name = (event) =>{
		// console.log(event.target.value);
		setFname(event.target.value);
	}

	const submit = (event) => {
		event.preventDefault();
		setFnames(fname);
	}

	return(
		<>
		<body>
		<div className="main-div">

			<ul className="nav">
			<li><a href="#home" className="all">Home</a></li>
			<li><a href="#contact" className="all">Contact</a></li>
			<li><a href="#login" className="all">Logout </a></li>
			</ul>
		</div>

		<div className="card">
		
			<img src={'https://picsum.photos/200/300'} alt='1' />
			<img src={'https://picsum.photos/200/301'} alt='2' />
			<img src={'https://picsum.photos/201/300'} alt='3' />

		</div>
		<section className="container ourservice text-center">
			<center><h1>SERVICES</h1>
            <p>Browse our royalty-free office photo collection</p></center>
            <div className="row rowsetting">
                <div className="col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto">
                    <div className="imgsetting d-block m-auto " style={{color:'goldenrod', fontSize:'67px'}}>
                    </div>   

                    <h2>E-Commerce</h2>
                    <p>Browse our royalty-free office photo collection
                        Browse our royalty-free office photo collection</p>

                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto">
                    <div className="imgsetting d-block m-auto ">
                    </div>   
                    <h2>Responsive Design</h2>
                    <p>Browse our royalty-free office photo collection
                        Browse our royalty-free office photo collection</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto ">
                    <div className="imgsetting d-block m-auto ">
                    </div>   
                    <h2>Web Security</h2>
                    <p>Browse our royalty-free office photo collection
                        Browse our royalty-free office photo collection</p>

                </div>

            </div>
		</section>

		<section className="form" >
		<form onClick={submit} >
		<h4>Feel Free to Call if have any Query</h4>
		<p>Kindly Contact Us!..Fill the below details to know you easily.</p>
		<h5> {fnames} </h5>
		<input type="text"  placeholder="Enter your Name" onChange={f_name} value={fname}/>
		<input type="text" placeholder="Enter your Contact_no" />
		<textarea placeholder="Enter your quires"></textarea>
		<button>Submit!..</button>
		</form>
		</section>
		</body>
		</>
		);
}

export default Web;