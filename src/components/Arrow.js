import React from "react";
import arrow from '../assets/arro.png'

function Arrow(){
    const handleClick = ()=>{
        window.scrollTo({ top : 0, behavior : 'smooth'})
    }
    return(
        <img className="arrow" onClick={handleClick} src={arrow}></img>

    )
}
export default Arrow