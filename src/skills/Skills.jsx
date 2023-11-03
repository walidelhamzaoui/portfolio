import {useRef, useEffect} from "react";
import { Link } from "react-router-dom";

import  image from './image-removebg-preview.png'
import  img from './css.png'
import  img1 from './javascript.png'
import  img2 from './html.png'
import  react from './react-removebg-preview.png'
import  laravel from './laravel.png'
import  bootstrap from './bo.png'
import  php from './php.png'
import  sql from './sql-removebg-preview.png'

import  git from './git-removebg-preview.png'

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
<div className="pt-5 pb-5" style={{backgroundColor:"#b8c0d9"}}>
<div className="container">
<div ref={usert} className="text-center title "><h1 className="fs-2 fw-bold" style={{color:"#307473", fontWeight:"700"}}> Skills</h1></div>
<div className="row ">

<div ref={userf} className="col-lg-6 col-md-6  ">

<img src={image} className="img-fluid" style={{height:"400px"}}/>



</div>
<div ref={userb} className="col-lg-6 col-md-6 ">
<div className=" gap-5 lh-lg "  >

<div className=" skills pt-4 ps-5">
<img src={img2} className="img-fluid "style={{width:"108px"}}  />
<img src={img} className="img-fluid "style={{width:"110px"}}  />
<img src={bootstrap} className="img-fluid "style={{width:"108px"}}  />
<img src={img1} className="img-fluid "style={{width:"108px"}}  />
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