import React from "react";
import {FaTimes, FaPen, FaRegCircle} from "react-icons/fa";

const Icons=({name}) =>{


    if ( name ==="circle") {
        return <FaRegCircle className="icons"/>
    }else if(name==="cross"){
        return <FaTimes className="icons"/>
    }else{
        return <FaPen className="icons"/>
    }


    // <h1>
    //     <FaTimes className="icons"/>
    //     <FaPen className="icons"/>
    //     <FaRegCircle className="icons"/>

    // </h1>
}
    
;

export default Icons;