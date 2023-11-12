import React, { useRef, useEffect } from "react";
import './projects.css'
import images from './s1.jpg'
import images2 from './s2.jpg'
import images3 from './s3.jpg'
import images4 from './s2.png'
import images5 from './site.png'
import images6 from './s6.png'
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
export default function Projects() {
  const userf = useRef();
  const userb = useRef();
  useEffect(() => {
    const sr = ScrollReveal({ reset: true, distance: '90px', duration: 2000, delay: 200 });

    // Create an array of elements you want to animate


    sr.reveal(userf.current, { origin: 'top' });
    sr.reveal(userb.current, { origin: 'left' });

  }, [])
  return (

    <div className=" project ">
      <div className="container pb-1">
        <h1 ref={userf} className="  title text-center  pb-3">My Projects</h1>

        <div ref={userb} className="row ">
          <div className="col-lg-4 col-md-6 mb-5 ">
            <div className="box" >
            <div className="boxe ">
            <h3 className="mb-4">See the website</h3>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odit quis doloribus atque nesciunt eaque voluptate nobis corporis fuga optio ex earum, rem, in tempore ratione facilis odio temporibus at?</p> */}
            <Link to='' className="bg-P rounded   "><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="rgb(123, 138, 76)" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
</svg></Link>
            </div>
              <img src={images} className="img-fluid  " style={{ height: "274px" }}  />
         
            </div>

          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="box" >
              <div className="boxe">
            <h3 className="mb-4">See the website</h3>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odit quis doloribus atque nesciunt eaque voluptate nobis corporis fuga optio ex earum, rem, in tempore ratione facilis odio temporibus at?</p> */}
            <Link to='' className="bg-P rounded mt-1 "><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="rgb(123, 138, 76)" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
</svg></Link>
            </div>
            <div className="boxe">
            <h3 className="mb-4">See the website</h3>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odit quis doloribus atque nesciunt eaque voluptate nobis corporis fuga optio ex earum, rem, in tempore ratione facilis odio temporibus at?</p> */}
            <Link to='' className="bg-P rounded mt-1 "><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="rgb(123, 138, 76)" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
</svg></Link>
            </div>
              <img src={images2} className="img-fluid  " style={{ height: "274px" }} />

            </div>

          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="box" >
              <div className="boxe">
            <h3 className="mb-4">See the website</h3>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odit quis doloribus atque nesciunt eaque voluptate nobis corporis fuga optio ex earum, rem, in tempore ratione facilis odio temporibus at?</p> */}
            <Link to='' className=" bg-P rounded mt-1 "><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="rgb(123, 138, 76)" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
</svg></Link>
            </div>
              <img src={images3} className="img-fluid " style={{ height: "275px" }} />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="box" >
              <div className="boxe">
            <h3 className="mb-4">See the website</h3>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odit quis doloribus atque nesciunt eaque voluptate nobis corporis fuga optio ex earum, rem, in tempore ratione facilis odio temporibus at?</p> */}
            <Link to='' className="bg-P rounded mt-1 "><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="rgb(123, 138, 76)" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
</svg></Link>
            </div>
              <img src={images4} className="img-fluid  " style={{ height: "275px" }} />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="box" >
              <div className="boxe">
            <h3 className="mb-4">See the website</h3>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odit quis doloribus atque nesciunt eaque voluptate nobis corporis fuga optio ex earum, rem, in tempore ratione facilis odio temporibus at?</p> */}
            <Link to='' className="bg-P rounded mt-1  "><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="rgb(123, 138, 76)" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
</svg></Link>
            </div>
              <img src={images5} className="img-fluid " style={{ height: "275px" }} />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="box" >
              <div className="boxe">
            <h3 className="mb-4">See the website</h3>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odit quis doloribus atque nesciunt eaque voluptate nobis corporis fuga optio ex earum, rem, in tempore ratione facilis odio temporibus at?</p> */}
            <Link to='' className="bg-P rounded  "><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="rgb(123, 138, 76)" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
</svg></Link>
            </div>
              <img src={images6} className="img-fluid " style={{ height: "275px" }} />
            </div>
          </div>
        </div>
      </div>



    </div>


  )

}