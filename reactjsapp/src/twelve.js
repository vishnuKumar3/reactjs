import React from 'react';
import "./all.css";





class Car2 extends React.Component{
	constructor(){
	super();
	this.math=0;
	this.phy=0;
	this.bio=0;}
	myfunction = (a,b,c) =>{


		if(a=="maths"){
		this.phy=this.bio=0;
		(this.math)++;
		if((this.math)%2==1){
		document.getElementById(a).style.display="block";
		document.getElementById(b).style.display="none";
		document.getElementById("ps").style.marginTop="800px";
		document.getElementById("bs").style.marginTop="900px";
		document.getElementById(c).style.display="none";}
		else{
		document.getElementById(a).style.display="none";
		document.getElementById("ps").style.marginTop="160px";
		document.getElementById("bs").style.marginTop="240px";
		}}


		else if(a=="physics"){
		this.math=this.bio=0;
		(this.phy)++;
		if((this.phy)%2==1){
		document.getElementById("ps").style.marginTop="160px";
		document.getElementById(a).style.display="block";
		document.getElementById(b).style.display="none";
		document.getElementById("bs").style.marginTop="900px";
		document.getElementById(c).style.display="none";}
		else{
		document.getElementById(a).style.display="none";
		document.getElementById("bs").style.marginTop="240px";}}
		


		else{
		this.math=this.phy=0;
		(this.bio)++;
		if((this.bio)%2==1){
		document.getElementById("ps").style.marginTop="160px";
		document.getElementById("bs").style.marginTop="240px";
		document.getElementById(a).style.display="block";
		document.getElementById(c).style.display="none";
		document.getElementById(b).style.display="none";}
		else{
		document.getElementById(a).style.display="none";}}	}
		
		
	

	

	


	render(){		
  return (
    <div>
      
	<center><p id="class">Twelfth standard</p></center>
	<button id="math" onClick={() => this.myfunction("maths","physics","biology")}>Mathematics</button>
	<div id="maths" class="envelope">
	<button class="boxmath">
		<p id="mathp">1.food suplying system</p>
		<p id="mathp1">
			<a id="mathhref" href="new.html">animation</a> 
			<a id="mathhref" href="">videos</a> 
			<a id="mathhref" href="">documentation</a>
		</p>
	</button>
	<button class="boxmath"><a id="mathhref" href="new.html"></a></button>
	<button class="boxmath"><a id="mathhref" href="new.html"></a></button>
	<button class="boxmath"><a id="mathhref" href="new.html"></a></button>
	<button class="boxmath"><a id="mathhref" href="new.html"></a></button>
	<button class="boxmath"><a id="mathhref" href="new.html"></a></button>
	<button class="boxmath"><a id="mathhref" href="new.html"></a></button>
	<button class="boxmath"><a id="mathhref" href="new.html"></a></button>
	<button class="boxmath"><a id="mathhref" href="new.html"></a></button>
	<button class="boxmath"><a id="mathhref" href="new.html"></a></button>
	<button class="boxmath"><a id="mathhref" href="new.html"></a></button>
	</div>

	<button id="ps" onClick={() => this.myfunction("physics","maths","biology")}>physical science</button>
	<div id="physics" class="envelope">
	<button class="boxps"><a id="pshref" href="new.html"></a></button>
	<button class="boxps"><a id="pshref" href="new.html"></a></button>
	<button class="boxps"><a id="pshref" href="new.html"></a></button>
	<button class="boxps"><a id="pshref" href="new.html"></a></button>
	<button class="boxps"><a id="pshref" href="new.html"></a></button>
	<button class="boxps"><a id="pshref" href="new.html"></a></button>
	<button class="boxps"><a id="pshref" href="new.html"></a></button>
	<button class="boxps"><a id="pshref" href="new.html"></a></button>
	<button class="boxps"><a id="pshref" href="new.html"></a></button>
	<button class="boxps"><a id="pshref" href="new.html"></a></button>
	<button class="boxps"><a id="pshref" href="new.html"></a></button>
	</div>

	<button id="bs" onClick={() => this.myfunction("biology","physics","maths")}>biological science</button>
	<div id="biology" class="envelope">
	<button class="boxbs"><a id="bshref" href="new.html"></a></button>
	<button class="boxbs"><a id="bshref" href="new.html"></a></button>
	<button class="boxbs"><a id="bshref" href="new.html"></a></button>
	<button class="boxbs"><a id="bshref" href="new.html"></a></button>
	<button class="boxbs"><a id="bshref" href="new.html"></a></button>
	<button class="boxbs"><a id="bshref" href="new.html"></a></button>
	<button class="boxbs"><a id="bshref" href="new.html"></a></button>
	<button class="boxbs"><a id="bshref" href="new.html"></a></button>
	<button class="boxbs"><a id="bshref" href="new.html"></a></button>
	<button class="boxbs"><a id="bshref" href="new.html"></a></button>
	<button class="boxbs"><a id="bshref" href="new.html"></a></button>
	</div>	
	
       
    </div>	

  );}
}

export default Car2;
