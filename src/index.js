import React from 'react';
import ReactDOM from 'react-dom';
import Practise2 from './Practise2';
import {BrowserRouter} from 'react-router-dom';
// import Router from './Router';
// import About from './About';
// import Contact from './Contact';
// import {BrowserRouter,Route,Switch} from 'react-router-dom';//route for giving url path as well as MATCHING COMPONENT

// import Indecrment from './Indecrment';
// import Todolist from './TodoListApp';
// import Web from './Web'; 
// import Practise from './Practise';
// import Login from './Login';
// import Event from './Events';
// import Hook from './Hooks';
// import App from './Forms';
// import App1 from './App1';
// import add from './Cal';
// import Calc from './Calc';
// import Head from './Head';
// import Para from './Para';
// import Orderlist from './Orderlist';
import './index.css';
// import Demo from './Demo';
// import Avatar from './Avatar';

// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<Demo name="zeel"/>,document.getElementById('root'));

// ReactDOM.render( <Avatar/> ,document.getElementById('root'));

// const currdate = new Date().toLocaleDateString();
// const currtime = new Date().toLocaleTimeString();
// <h1>  {`My name is fdfsd${fname} fdsfsdfd${lname} fdsfdsf  `}</h1>TEMPLATE LITERALS
// FOR INLINE CSS IN REACT=============
// const heading = {
// 	textAlign: 'center',
// 	color: 'pink',
// 	textTransform: 'capitalize',
// 	fontWeight: 'bold',
// 	textShadow: '0px 2px 4px #ffe9c5',
// 	margin: '50px 0px',
// };
// Year Month Day Hr M S
// let currdate = new Date();
// currdate = currdate.getHours();
// let greet = '';

// const cssStyle = {  };

// if(currdate>=1 && currdate<12){
// 	greet = 'Good Morning';
// 	cssStyle.color='green';
// }else if(currdate>=12 && currdate<19){
// 	greet = 'Good Afternoon';
// 	cssStyle.color='red';
// }else{
// 	greet = 'Good Night';
// }

// ReactDOM.render(
// 	<>
// 	<h1>Hello Sir,<span style={cssStyle}> {greet} </span> </h1>

// 	</>
// 	,document.getElementById('root'));

// ReactDOM.render(<App1/>,document.getElementById('root'));

// ReactDOM.render(<Calc/>,document.getElementById('root'));

// ReactDOM.render(<App/>,document.getElementById('root'));

// ReactDOM.render(<Hook/>,document.getElementById('root'));

// ReactDOM.render(<Event/>,document.getElementById('root'));

// ReactDOM.render(<Login/>,document.getElementById('root'));

// ReactDOM.render(<Practise/>,document.getElementById('root'));
// const Home =() => {
// 	return(
// 			<div className="contact">
// 				<h2> Welcome to Home Page. </h2>
// 			</div>
// 		);
// }
ReactDOM.render(
	<BrowserRouter>
	<React.Fragment>
	<Practise2/> 	
	</React.Fragment> 
	</BrowserRouter>
	,document.getElementById('root'));



// ReactDOM.render(<Web/>,document.getElementById('root'));
// ReactDOM.render(<Todolist/>,document.getElementById('root'));
// ReactDOM.render(<Indecrment/>,document.getElementById('root'));
// const Home =() => {
// 	return(
// 			<div className="contact">
// 				<h2> Welcome to Home Page. </h2>
// 			</div>
// 		);
// }

// ReactDOM.render(
// 	<BrowserRouter>
// 	<>
// 	<Router/> 
// 	<Switch>
// 	<Route path = "/" exact component={Home} /> 
// 	<Route path = "/about" component={About} /> 
// 	<Route path = "/contact" component={Contact} />
// 	</Switch>
// 	</> 
// 	</BrowserRouter>
// 	,document.getElementById('root'));


// const name = ['zeel','mewada'];
// const data = [1,...name,'female',25];//(...)dots r spread operators 

// console.log(name);
// console.log(data);

// eg:--
// const name = {
// 		fname:'zeel',
// 		lname:'mewada',
// };
// const data = {
// 	id:'1',
// 	greet:'Hello',
// 	...name,
// 	greet1:'welcome',
// };
// console.log(data);


// MAP ARRAY=====================

const arr = ['zeel','mewada','25'];
// console.log(arr[1]);

// HOW TO WRITE IN MAP METHOD ==> the below
// SYNTAX= arr.map(function(currentValue,index,arr),thisValue);
const newarr = arr.map(function(currentValue,i,arr){
	return i + " : " + currentValue + ' developer' ;//concatenation
	// console.log(arr);
});
// console.log(newarr);


// INADVANCE WAY the below one & Using arrow func======
const studentarr = [
{id:1,name:'zeel',degree:'bca'},
{id:2,name:'mewada',degree:'cs'},
{id:3,name:'zeelMewada',degree:'sci'},
];
// console.log(studentarr);

const newdata = studentarr.map( (cvalue) => {
	return `My name is ${cvalue.name} & compeleted ${cvalue.degree}`;
});
console.log(newdata);



// EG OF LET & CONST VARIABLES the below========
// var name = "zeelmewada_developer";
// name = "zeel";
// name = "mewada";
// alert(name);

// let name = "zeel";
// name="mewada";
// name="mewada_developer";
// alert(name);

// const name = "zeel";
// name="mewada";
// name="mewada_developer";
// alert(name);

// EG FOR FUNCT & BLOCK SCOPE the BELOW===============
// function modeljs(love){
// 	if(love){
// 		let name = 'zeel';
// 		const sname = 'mewada';
// 		console.log("my name is"+ " " + name + " " + sname);
// 	}

// }
// modeljs(true);

// EG USING VAR IN BLOCK & CALLING OUTSIDE FRM IT the BELOW============
// function modeljs(love){
// 	if(love){
// 		var name = 'zeel';
// 		var sname = 'mewada';
// 		console.log("my name is-"+ " " + name + " " + sname);
// 	}

// }
// modeljs(true);

// EG FOR USING LET & CONST IN BLOCK & CALLING OUTSIDE FRM IT the BELOW============
// function modeljs(love){
// 	if(love){
// 		let names = 'zeel';
// 		const sname = 'mewada';
// 	}
// 	console.log("my name is-"+ " " + names + " " + sname);
// }
// modeljs(true);

// EG ============
// var name = 'zeel';
// if(true){
// 	var name = 'mewada';
// 	console.log(name);
// }
// console.log(name);

// ==================
// let name = 'zeel';
// if(true){
// 	let name = 'mewada';
// 	console.log(name);
// }
// console.log(name);

// ==================
// const name = 'zeel';
// if(true){
// 	const name = 'mewada';
// 	console.log(name);
// }
// console.log(name);


// STRING METHOD IN TEMPLATE LITERALS EG:as below===== 
// (4methods included in template literals es6)============
// let firstName = 'zeel';
// const name = `${firstName}`;

// console.log(`${firstName}`.startsWith('z'));
// console.log(`${firstName}`.endsWith('l'));
// console.log(`${firstName}`.includes('e'));
// console.log(`${firstName} `.repeat(5));

// console.log(name.startsWith('z'));
// console.log(name.endsWith('l'));
// console.log(name.includes('e'));
// console.log(name .repeat(10));


// ARRAY DESTRUCTING as BELOW ===========
// var arr1 = ['zeel','mewada','developer','zeel_mewada','_developer'];
// console.log(arr1[1]);

// let [t0,t1,t2,t3,t4] = arr1;
// console.log(`my name is ${t0} ${t1}`);
// console.log(arr1.length);
// let[t0,,,,t4]=arr1;
// console.log(`my name is ${t0} and a ${t4}.`);

// cn write this way also-----
// let t0,t1;
// [t0,t1] = arr1;
// console.log(`my name is ${t0} ${t1}.`);


// EG: PROGRAM TO SWAP 2_NUMBERS WITHOUT THIRD VARIABLE--
// let a = 5;
// let b = 10;

// normally =============
// let temp = a;
// a = b;
// b = temp;

// by arr_DESTRUCTING ===============
// [a,b] = [b,a];

// console.log(`the value of a is ${a} and value of b is ${b}`);


// OBJECT DESTRUCTING as BELOW ===========
// const bioData = {
// 	name:'zeel',
// 	sname:'mewada',
// 	degree:'bca',
// 	hob:{
// 		fir:'playing',
// 		sec:'indoor'
// 	}
// }
// normal way===========
// console.log(`my name is ${bioData.name} and graduated in ${bioData.degree}`);

// OBJ destructing ==========
// let {name,sname,degree} = bioData;
// console.log(`my name is ${name} ${sname} and graduated in ${degree}. `);

// also 2nd method=======
// let name,sname,degree;
// ({name,sname,degree} = bioData);
// console.log(`my name is ${name} ${sname} and graduated in ${degree}. `);

// also 3rd method======
// let {name:nm,sname,degree} = bioData;
// console.log(`my name is ${nm} ${sname} and graduated in ${degree}. `);

//also 4th method obj in obj ==========
// let {name:nm,sname,degree,hob} = bioData;
// console.log(`my name is ${nm} ${sname} and graduated in ${degree} also i love ${hob.fir}.`);


// REST PARAMETERS =====
// function sum(...inputs){
// 	// console.log(inputs);
// 	// console.log(...inputs);
// 	let total = 0;
// 	for(let i of inputs){//forLoop using rest parameter(...)
// 		total += i;//addition..
// 	}console.log(total);
// }
// sum(1,2,3,4,5,6,7,8,9,10);

// 2nd EG:-----------
// function fun(a,b,...c)
// {
// 	console.log(`${a} ${b}`);
// 	console.log(c);
// 	console.log(c[0]);
// 	console.log(c.length);
// 	console.log(c.indexOf('Edan'));
// }
// fun('Ronaldo','Neymar','Pele','Messi','Edan');


// MATH OBJECT - (sign() & trunc() )=methods
// let number = -5.9696;
// console.log(Math.sign(number));//shows sign number eg.+ve -ve
// console.log(Math.trunc(number));//shows before decimal number
// console.log(Math.floor(number));//shows lower number

// NUMBER & GLOBAL METHOD =========
// let num = 'hjkjkjh';
// console.log(isFinite(num));//METHOD isFinite
// console.log(isNaN(num));//METHOD isNaN & THIS WILL RETURN TRUE BECAUSE ITS GLOBAL
// console.log(Number.isNaN(num));//METHOD isNaN & THIS WILL RETURN FALSE BECAUSE ITS NUMBER METHOD
// console.log(Number.isInteger(num));//METHOD isInteger IT IS NOT A GLOBAL THERFORE WE WRITE NUMBER METHOD


// OOP CONCEPT (class,object,method & properties [using states & attributes] inheritence)===
// class Students{//in class always constructor method is define bydefault we cn say.
// 	constructor(name,age,cls){//all properties r define inside constructor method.
// 		this.myname = name;
// 		this.myage = age;
// 		this.myclass = cls;
// 	}
// 	//instance method (means while inherit they cn excess this method also)
// 	biodata(){//own method
// 		return `Hi,I am a Class Method ${this.myname},and my age is ${this.myage} from the class ${this.myclass}`;
// 	}
// }
// class Player extends Students{//inherits
// 	constructor(name,age,cls,game){
// 		super(name,age,cls);//this method is used to access parent properties in child & compulsory to write this.
// 		this.mygame = game;
// 	}
// 	play_bio(){
// 		return `${super.biodata()},and i love playing ${this.mygame}`;
// 	}
// }
// // let obj1 = new Students('zeel',25,'BCA','football');//object
// let obj2 = new Player('mewada',25,'sci','badminton');//object cn write this way also after inheritence
// let obj3 = new Player('zeel_mewada',25,'developer','hockey');//object
// // console.log(obj1.play_bio());//with help of obj we call method
// console.log(obj2.play_bio());
// console.log(obj3.play_bio());


//executor PROMISE PRODUCE ===========
//1st promise-----
// const pobj1 = new Promise((resolve,reject) => {

// 	setTimeout(()=>{
// 		let roll_no = [1,2,3,4,5];
// 		resolve(roll_no);
// 	},2000);
// });

//2nd promise created---
// const getBiodata = (indexdata) => {
// 	return new Promise((resolve,reject) => {
// 		setTimeout((indexdata) => {
// 			let biodata = {
// 				name:'zeel',
// 				age:25
// 			}
// 			resolve(`My name is ${biodata.name} and I am ${biodata.age}
// 				years old.`);
// 		},2000,indexdata);
// 	});
// }

//..promise consume/receiving value----
// pobj1.then((roll_no) => {
// 	console.log(roll_no);
// 	return getBiodata(roll_no[1]);
// }).then((kuchbhi) => {
// 	console.log(kuchbhi);
// }).catch((error) => {
// 	console.log(error);
// })

//other way using async/await fr receiving value----
// async function getData(){

// 	try{//error handling using try catch method----
// 		const rollnodata = await pobj1;
// 		console.log(rollnodata);

// 		const bio_data = await getBiodata();
// 		console.log(bio_data);
// //same way you cn write fr multiple & console it..
// 		return bio_data;
// 	}catch(err){
// 		// console.log(`The Error: ${err}`);
// 		alert(`The Error: ${err}`);
// 	}
	
// }
//other way to write the below--
// const getname = getData().then((myname) => {
//       console.log(myname);
// });

// getData();

//.then means resolved
//.catch means error