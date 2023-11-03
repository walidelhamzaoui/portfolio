import {useRef,useEffect } from 'react'

import emailjs from '@emailjs/browser';
import './form.css'
import ScrollReveal from "scrollreveal"; 
export default function Form() {
const userf=useRef();
const userb=useRef();
const form = useRef();
    useEffect(() => {
        const scroll = ScrollReveal({ reset: true, distance: '90px', duration: 2000, delay: 200 });
        
        // Create an array of elements you want to animate
     
        
        scroll.reveal(userf.current, { origin: 'top' });
        scroll.reveal(userb.current, { origin: 'left' });
    
      }, [])
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_1roawzi', 'template_p0o4kul', form.current,'D4kOHmkHFyu0zcANz')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    return (
        <div className='bg pb-3 pt-3'>
          <h1  ref={userf}className='title text-center pt-2'>Contact <span className='text-black'>Me</span> </h1>
            <div ref={userb} className="  container  d-lg-flex  align-items-lg-center justify-content-lg-center pt-4 pb-3  ">
          
                <form ref={form} className='forma rows' onSubmit={sendEmail}>
                <h1 className='text-center fs-2  pt-3 pb-3'>Envoyer Message</h1>
                <div className='row'>
              
                    <div className="form-group col-lg-6 col-md-6   ">
                    <label className="form-label text-start">Name</label>
                    <input type="text" name="user_name" placeholder=" Name" className="form-control  " required/>
                    </div>
                    <div className="form-group  col-lg-6 col-md-6    ">
                    <label  className="form-label text-start">Email</label>
                    <input type="email" name="user_email" placeholder=" Email" className="form-control " required/>
                    </div>
                    </div>
                <div className='row' >
              
                    <div className="form-group col-lg-6 col-md-6    ">
                    <label className="form-label text-start">phone number</label>
                    <input type="telephone" name="user_phone" placeholder=" phone" className="form-control  " required/>
                    </div>
                    <div className="form-group  col-lg-6 col-md-6    ">
                    <label  className="form-label text-start">subject</label>
                    <input type="text" name="subject" placeholder=" subject" className="form-control " required/>
                    </div>
                    </div>
                    
                    <div className="form-group    mt-3 d-flex flex-column justify-content-center  ">
                    <label className="form-label">Message</label>
                  <textarea name="message" id="description" cols="75" rows="4" placeholder='Seend...'  className=" pt-lg-1 pt-0    " ></textarea>
                    
                    </div>
                    <div className='text-center pt-4 w-100 pb-3 '>
                    <button type="submit" className=" btn btn-secondary ps-lg-5 pe-lg-5 fs-5 ">Envoyer</button>
                    
                    </div>
                </form>

            </div>


        </div>

    )


}