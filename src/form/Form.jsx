import {useRef,useEffect, useState } from 'react'

import emailjs from '@emailjs/browser';
import './form.css'
import ScrollReveal from "scrollreveal"; 
import { Alert } from 'bootstrap';
export default function Form() {
const [alert,setAlert]=useState('')
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
      
        emailjs.sendForm('service_1roawzi', 'template_p0o4kul', form.current, 'D4kOHmkHFyu0zcANz')
          .then((result) => {
            console.log(result.text);
            var footer = document.getElementById('footer');
            var successAlert = document.createElement('div');
           
            successAlert.className = ' col-lg-6 col-md-6 ms-auto alert alert-success d-flex  align-items-center z-3 ';
            successAlert.role = 'alert';
            successAlert.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="me-2 bi bi-check-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
          </svg>
              <div>
                Message sent successfully
              </div>
            `;
            footer.insertBefore(successAlert, footer.firstChild); 
          })
          .catch((error) => {
            console.log(error.text);
            // Gérer l'erreur ici
          });
      
        e.target.reset();
      };
      
    return (
        <div className='bg pb-3 pt-3' >
   
          <h1  ref={userf}className='title text-center pt-2'>Contact <span className='text-black'>Me</span> </h1>
            <div ref={userb} className="  container  d-lg-flex  align-items-lg-center justify-content-lg-center pt-4 pb-3  ">
          
                <form ref={form} className='forma rows' onSubmit={sendEmail} id="footer">
                <h1 className='text-center fs-2  pt-3 pb-3'>Send Message</h1>
                <div className='row'>
              
                    <div className="form-group col-lg-6 col-md-6 mt-3   ">
                    <label className="form-label text-start">Your Name</label>
                    <input type="text" name="user_name" placeholder=" Name" className="form-control " required/>
                    </div>
                    <div className="form-group  col-lg-6 col-md-6 mt-3    ">
                    <label  className="form-label text-start">Your Email</label>
                    <input type="email" name="user_email" placeholder=" Email" className="form-control " required/>
                    </div>
                    </div>
                <div className='row  '>
              
                    <div className="form-group col-lg-6 col-md-6 mt-3">
                    <label className="form-label text-start">Your Phone Number</label>
                    <input type="telephone" name="user_phone" placeholder=" phone" className="form-control" required/>
                    </div>
                    <div className="form-group  col-lg-6 col-md-6 mt-3">
                    <label  className="form-label text-start">subject</label>
                    <input type="text" name="subject" placeholder=" subject" className="form-control" required/>
                    </div>
                    </div>
                    
                    <div className="form-group    mt-3 d-flex flex-column justify-content-center">
                    <label className="form-label">Message</label>
                  <textarea name="message" id="description" cols="75" rows="4" placeholder='Seend Message...'className="  pt-2    " ></textarea>
                    
                    </div>
                    <div className='text-center pt-4 w-100 pb-3 '>
                    <button type="submit" className=" btn btn-secondary ps-lg-5 pe-lg-5 fs-5 ">Send Message</button>
                    
                    </div>
                    {alert}
                </form>

            </div>


        </div>

    )


}