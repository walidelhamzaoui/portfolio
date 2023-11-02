import React,{useRef,useEffect} from "react";
import './projects.css'
import images from'./s1.jpg'
import images2 from'./s2.jpg'
import images3 from'./s3.jpg'
import images4 from'./s2.png'
import images5 from'./site.png'
import images6 from'./s6.png'
import ScrollReveal from "scrollreveal"; 
export default function Projects(){
 const userf=useRef();
 const userb=useRef();
    useEffect(() => {
        const sr = ScrollReveal({ reset: true, distance: '90px', duration: 2000, delay: 200 });
        
        // Create an array of elements you want to animate
     
        
        sr.reveal(userf.current, { origin: 'top' });
        sr.reveal(userb.current, { origin: 'left' });
    
      }, [])
return(

<div className=" project pt-5 pb-5">
<div className="container pb-1">
<h1 ref={userf} className="  title text-center pt-1 pb-5">My Projects</h1>

<div  ref={userb} className="row ">
<div class="col-lg-4 col-md-6 mb-5 ">
<div class="box" data-work="Site web de commerce de acheter les vetment et les sbardine et t-shirt et custome ">
<img src={images} className="img-fluid  " />

</div>

</div>
<div class="col-lg-4 col-md-6 mb-5">
<div class="box" data-work="Ce Site Vend Différents Types De Pierres">
<img src={images2} className="img-fluid  " style={{height:"270px"}} />

</div>

</div>
<div class="col-lg-4 col-md-6 mb-5">
<div class="box" data-work="Application">
<img src={images3} className="img-fluid "  style={{height:"275px"}} />

</div>

</div>
<div class="col-lg-4 col-md-6 mb-5">
<div class="box" data-work="Application">
<img src={images4} className="img-fluid "  style={{height:"275px"}} />

</div>

</div>
<div class="col-lg-4 col-md-6 mb-5">
<div class="box" data-work="Application">
<img src={images5} className="img-fluid "  style={{height:"275px"}} />

</div>

</div>
<div class="col-lg-4 col-md-6 mb-5">
<div class="box" data-work="Application">
<img src={images6} className="img-fluid "  style={{height:"275px"}} />

</div>

</div>


</div>


</div>



</div>


)

}