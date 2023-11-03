import { useState, useRef,useEffect } from 'react'
import './form.css'
import ScrollReveal from "scrollreveal"; 
export default function Form() {
const userf=useRef();
const userb=useRef();
    useEffect(() => {
        const sr = ScrollReveal({ reset: true, distance: '90px', duration: 2000, delay: 200 });
        
        // Create an array of elements you want to animate
     
        
        sr.reveal(userf.current, { origin: 'top' });
        sr.reveal(userb.current, { origin: 'left' });
    
      }, [])
    return (
        <div className='bg pb-3 pt-3  '>
          <h1  ref={userf}className='title text-center pt-2'>Contact <span className='text-black'>Me</span> </h1>
            <div ref={userb} className="  container  d-flex  align-items-center justify-content-center pt-4 pb-3  ">
          
                <form  className='forma rows  ' >
                <h1 className='text-center fs-2 pb-3'>Envoyer Message</h1>
                <div className='row ' >
              
                    <div className="form-group col-lg-6 col-md-6   ">
                    <label className="form-label text-start">Name</label>
                    <input type="text" name="name" placeholder=" Name" className="form-control  " required/>
                    </div>
                    <div className="form-group  col-lg-6 col-md-6   ">
                    <label  className="form-label text-start">Email</label>
                    <input type="email" name="email" placeholder=" Email" className="form-control " required/>
                    </div>
                    </div>
                <div className='row ' >
              
                    <div className="form-group col-lg-6 col-md-6   ">
                    <label className="form-label text-start">phone number</label>
                    <input type="telephone" name="name" placeholder=" phone" className="form-control  " required/>
                    </div>
                    <div className="form-group  col-lg-6 col-md-6   ">
                    <label  className="form-label text-start">subject</label>
                    <input type="text" name="subject" placeholder=" subject" className="form-control " required/>
                    </div>
                    </div>
                    
                    <div className="form-group ps-lg-2  mt-3 d-flex flex-column justify-content-center  ">
                    <label className="form-label">Message</label>
                  <textarea name="description" id="description" cols="40" rows="4" placeholder='Seend...'  className="pt-lg-1 pt-0 " style={{maxWidth:"550px"}} ></textarea>
                    
                    </div>
                    <div className='text-center pt-3 w-100 '>
                    <button type="button" className=" btn btn-secondary ps-lg-5 pe-lg-5 fs-5 ">Envoyer</button>
                    
                    </div>
                </form>

            </div>


        </div>

    )


}