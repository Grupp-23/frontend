import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./CreditsHome.css";

const CreditsHome = props => {
    return (
        <div className='popup-box'>
            <div className='box'>
                <button className='btn-close' onClick={props.handleCLose}>Close</button>
                
            </div>
            {props.content}
        </div>
    )
      
    
}

export default CreditsHome;