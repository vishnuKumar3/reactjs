import React from 'react';
import Reactdom from 'react-dom';
import {BrowserRouter, Link,Route } from 'react-router-dom';
import Home from "./home";
import Six from "./six";
import Seven from "./seven";
import Eight from "./eight";
import Nine from "./nine";
import Ten from "./ten";
import Eleven from "./eleven";
import Twelve from "./twelve";
import "./index.css";





class Main extends React.Component{

	


	render(){		
  return (
    <div>
	<BrowserRouter>
	<Link id="link" to="/home"></Link>
	<Route path="/home" component={Home}/>
	<ul>
	<li><button><Link id="link" to="/home">Home</Link></button></li>
	<li><button><Link id="link" to="/six">Six</Link></button></li>
	<li><button><Link id="link" to="/seven">Seven</Link></button></li>
	<li><button><Link id="link" to="/eight">Eight</Link></button></li>
	<li><button><Link id="link" to="/nine">Nine</Link></button></li>
	<li><button><Link id="link" to="/ten">Ten</Link></button></li>
	<li><button><Link id="link" to="/eleven">Eleven</Link></button></li>
	<li><button><Link id="link" to="/twelve">Twelve</Link></button></li>
	</ul>
	<Route path="/six" component={Six}/>
	<Route path="/seven" component={Seven}/>
	<Route path="/eight" component={Eight}/>
	<Route path="/nine" component={Nine}/>
	<Route path="/ten" component={Ten}/>
	<Route path="/eleven" component={Eleven}/>
	<Route path="/twelve" component={Twelve}/>
	</BrowserRouter>
       
    </div>	

  );}
}

Reactdom.render(<Main/>,document.getElementById("root"));


