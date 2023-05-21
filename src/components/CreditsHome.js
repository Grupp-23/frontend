import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./CreditsHome.css";

const CreditsHome = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <button className="btn-close" onClick={props.handleClose}>
          Close
        </button>
        {props.content}
      </div>
    </div>
  );
};

export default CreditsHome;