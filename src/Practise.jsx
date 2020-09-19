import React,{useState} from 'react';
import './practise.css'

const instyle = {
	backGroundColor:'red',
	color:'brown',
	textAlign: 'center',
    textTransform: 'capitalize',
};

const pstyle = {
	fontSize:'25px',
	color:'brown',
	cursor:'pointer',
	textTransform:'capitalize',
	backGroundColor:'yellow',
	textAlign:'center',
	fontWeight:'bold',
}

const img1 = 'https://joeschmoe.io/api/v1/random';

const name = 'Zeel';
const lname = 'Mewada';

const li = 'maths';

// const curdate = new Date().toLocaleDateString();
// const curtime = new Date().toLocaleTimeString();
let greet = ' ';
// Y M D H M S
// let curdate = new Date(2020,9,11,19);
let curdate = new Date();
curdate = curdate.getHours();

if(curdate>=1 && curdate<12)
{
	greet = 'Good Morning';
}
else if(curdate>=12 && curdate<17)
{
	greet = 'Good Noon';
}
else if(curdate>=17 && curdate<20)
{
	greet = 'Good Evening';
}
else
{
	greet = 'Good Night';
}


function Practise({nm}) {

	const[names,setNames] = useState();//HOOKS & we need usestate==
	const[names1,setNames1] = useState();
	const[l_name,setL_Name] = useState();
	const[l_name1,setL_Name1] = useState();
	const[pass,setPass] = useState();
	const[pass1,setPass1] = useState();
	
	const evename = (event) => {
		setNames(event.target.value);
	}

	const lasname = (event) => {
		setL_Name(event.target.value);
	}

	const password = (event) => {
		setPass(event.target.value);
	}

	const sub = (event) => {
		event.preventDefault();//for holding form_data
		setNames1(names);
		setL_Name1(l_name);
		setPass1(pass);
	}


	return(
		<>//React.Fragment
		<div>
			<form onClick={sub} >
			<div className="form">
			<h1 className="h1"> Hello!! {names1} {l_name1} {pass1} </h1>
			<input type="text" placeholder="Enter Your FirstName" onChange={evename} value={names}/>
			<input type="text" placeholder="Enter Your LastName" onChange={lasname} value={l_name} />
			<input type="password" placeholder="Enter Your Password" onChange={password} value={pass} />
		
			<button>Submit!.</button>
			</div>
			</form>
			<br/>

			<h1> Hello,Its {greet} </h1>
			<h1>Wel-Come to this world.....{nm}</h1>
			<h1>{`My Name is ${name} ${lname}....`}</h1>
			<h1 style={instyle}>hello!!...</h1>
			<a href="https://www.thapatechnical.com/">
			<p style={pstyle}> Welcome to reactJs for practising... </p>
			</a>
			<p style={{color:'blue',textAlign:'center',fontWeight:'bold'}}> Thanks for beginning reactjs </p>
			<ul>
			<li>{li}</li>
			<li>Geo</li>
			<li>Sci</li>
			<li>Eng</li>
			<li>His</li>
			</ul>
			<img src={img1} alt="myPic" />
			<a href="">
				<img src={'https://joeschmoe.io/api/v1/jon'} alt="myPic" />
			</a>
			
		</div>
		</>
		);
}

export default Practise;