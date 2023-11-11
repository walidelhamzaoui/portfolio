import {useRef, useEffect} from "react";
import { Link } from "react-router-dom";

import  image from './image.jpg'
import  css from './css.png'
import  js from './javascript.png'
import  html from './html.png'
import  react from './reactjs.png'
import  laravel from './laravel.png'
import  bootstrap from './bo.png'
import  php from './php.png'
import  sql from './sql.png'
import  git from './git.png'
import './skills.css'
import ScrollReveal from "scrollreveal"; 
export default function Skills(){
    const usert=useRef();
    const userf=useRef();
    const userb=useRef();
       useEffect(() => {
           const sr = ScrollReveal({ reset: true, distance: '90px', duration: 2000, delay: 200 });
           
           // Create an array of elements you want to animate
        
           
           sr.reveal(usert.current, { origin: 'top' });
           sr.reveal(userf.current, { origin: 'left' });
           sr.reveal(userb.current, { origin: 'left' });
       
         }, [])
return(
<div className="" style={{backgroundColor:"rgba(68, 60, 55, 0.388)"}}>
<div className="container">
<div ref={usert} className="text-center title pt-3 pb-3  "><h1  style={{color:"rgb(165, 121, 70)", fontWeight:"700"}}> Skills</h1></div>
<div className="row ">

<div ref={userf} className="col-lg-6 col-md-6  mt-2 mb-3  ">

<img src={image} className="img-fluid img-skills" style={{height:"400px"}}/>



</div>
<div ref={userb} className="col-lg-6 col-md-6 ">
<div className=" gap-5 lh-lg "  >

<div className=" skills  ps-5">
<img src={html} className="img-fluid "style={{width:"108px"}}  />
<img src={css} className="img-fluid "style={{width:"110px"}}  />
<img src={bootstrap} className="img-fluid "style={{width:"108px"}}  />
<img src={js} className="img-fluid "style={{width:"108px"}}  />
<img src={php} className="img-fluid  "style={{width:"108px"}}  />
<img src={laravel} className="img-fluid "style={{width:"106px"}}  />
<img src={react} className="img-fluid "style={{width:"108px",height:'105px'}}  />


<img src={sql} className="img-fluid  "style={{width:"108px"}}  />
<img src={git} className="img-fluid  "style={{width:"200px"}}  />
</div>

</div>

</div>
</div>


</div>



</div>


)



}