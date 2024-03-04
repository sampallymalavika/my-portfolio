import React from "react";
import mail from '../assets/OIP.jpg'

const Contact = ()=>{
    return(
        <><h1 className="cont">Contact Me</h1>
        <div className="card5" id= "Contact">
        <img className= 'mailimg'src= {mail}></img>
        <a className= 'mailto' href="mailto:sampallymalavika@gmail.com">sampallymalavika@gmail.com</a>
        <img className= 'mailimg1'src= {mail}></img>
        <a className='mailto1' href="https://www.linkedin.com/in/sampally-malavika-bb24b7276">LinkedIn</a>
        </div>
        </>
    )
}

export default Contact