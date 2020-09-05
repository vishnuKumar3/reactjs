import React from "react";
import Reactdom from "react-dom";
import "./home.css";

class Eic extends React.Component{


render(){
return (
<div>
<p id="circle"></p>
<p id="one" >education</p>
<p id="two">innovation</p>
<p id="three">core</p>
<p id="pid"><b id="eid" >E</b><b id="iid">I</b><b id="cid">C</b></p>
<center><p id="core">welcome to the EI core</p></center>

<div class="bottom">
<p id="desc">
EIC is the best platform to construct you a strong base in the mathematics and science.Our website provides you a wide variety of videos,animations and documentation for the concepts which you want in a best way.Here is the presentation.
<p id="scroll">Scroll to the top and choose the class.</p>
</p>
<p id="video">Video</p>
<p id="Animation">Animation</p>
<p id="Documentation">Documentation</p> 
<video id="videoconcept" autoPlay muted loop>
<source src="Videos/video.mp4"/>
</video>
<video id="videoconceptanimation" autoPlay muted loop>
<source src="Videos/animation.mp4"/>
</video>
<iframe src="documentation.pdf" id="iframe"/>
</div>
</div>
);}}

export default Eic;
