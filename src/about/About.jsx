import React from "react";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import images from './profail.jpg'
import ScrollReveal from "scrollreveal";
import './about.css'
import Typed from 'typed.js';

const PDF_FILE_Url = 'https://portfolio-three-khaki-70.vercel.app/walid_elhamzaoui.cv.pdf'

export default function Home() {

  React.useEffect(() => {
    const typed = new Typed(myRefi.current, {
      strings: ['Full-Stack Developer','Front-End Developer','Back-End Developer  '],
      typeSpeed: 50,backDelay:1000,backSpeed:100,loop:true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  const downloadfileAtUr = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]))
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.style.backgroundColor = "black"
        aTag.href = blobURL;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();


        aTag.remove();

      }))
  }
  const userf = useRef();
  const userfb = useRef();
  const userfi = useRef();
  const myRef = useRef();
  const myRefa = useRef();
  const myRefe = useRef();
  const myRefi = useRef();
  const useri = useRef();

  useEffect(() => {
    const sr = ScrollReveal({ reset: true, distance: '90px', duration: 2000, delay:200 });

    // Create an array of elements you want to animate
    const elementsToAnimate = [myRef.current, myRefa.current, myRefe.current, myRefi.current];

    sr.reveal(elementsToAnimate, { origin: 'top' });

    sr.reveal(userf.current, { origin: 'left' });
    sr.reveal(userfb.current, { origin: 'bottom' });
    sr.reveal(userfi.current, { origin: 'bottom' });
    sr.reveal(useri.current, { origin: 'bottom' });
  }, [])
  return (
    <div className="pt-5" style={{ backgroundColor:"rgba(68, 60, 55, 0.388)"}}>

      <div className="container">
        <div ref={userf} className="row d-flex justify-content-cente  ">
          <div className="col-lg-6 col-md-6  text-center text-lg-start text-md-start">
            <div className="tite lh-lg ">
              <h4 ref={myRef}>Hello , It Me</h4>
              <h1 ref={myRefa}>Walid ELhamzaoui</h1>
              <h4 ref={myRefe}> And I'am <span ref={myRefi} className="fs-4" style={{ color: "#745830", fontWeight: "800" }}></span> </h4>
              <p className=" me-3 pb-3 fs-5 tit text-center text-lg-start  text-md-start   ">As a full stack developer, I possess a broad range of technical skills and knowledge that allow me to develop and maintain both the front-end and back-end of a web application. My expertise includes knowledge of various programming languages, databases, and frameworks, which enable me to create web applications that are not only functional but also scalable and robust.</p>
              <div ref={userfi} className="d-flex justify-content-center justify-content-md-start  ms-3 gap-4 mb-5 ">
                <Link className="socialContainer containerOne" to="https://www.instagram.com/walid.hamzaoui.7/?hl=en">
                  <svg viewBox="0 0 16 16" className="socialSvg instagramSvg"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
                </Link>

                <Link className="socialContainer containerTwo" to="https://www.facebook.com/walid.hamzaoui.7">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="white" className="bi bi-facebook socialSvg" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </Link>


                <Link className="socialContainer containerThree" to="https://www.linkedin.com/in/walid-elhamzaoui-0b9a5a285/">
                  <svg viewBox="0 0 448 512" className="socialSvg linkdinSvg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                </Link>

                <Link className="socialContainer containerFour" to="https://api.whatsapp.com/send?phone=2120639433495">
                  <svg viewBox="0 0 16 16" className="socialSvg whatsappSvg"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
                </Link>
              </div>
              <div ref={userfb} className="pb-4 justify-content-start mb-3   ">
                <button className=" cv  border-0 rounded-2 p-1 text-center " onClick={() => downloadfileAtUr(PDF_FILE_Url)}><svg xmlns="http://www.w3.org/2000/svg" width="35" height="20" fill="currentColor" className="bi bi-cloud-arrow-up-fill" viewBox="0 0 16 16">
                  <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z" />
                </svg> Download cv</button>
              </div>
            </div>


          </div>
          <div ref={useri} className="col-lg-6 col-md-6">
            <div className="image  pb-4 text-lg-start d-flex justify-content-center align-items-center">
              <img src={images} className=" img-home img-fluid rounded-circle ms-lg-5  " style={{ width: "420px" }} />
            </div>

          </div>
        </div>


      </div>



    </div>


  )

}