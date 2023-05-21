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
        <div>
          <h2>Created by:</h2>
          <p>
            <table>
              <tr>
                
                <td class="column1">Oliver Bengtsson,</td>
                <td>Kasper Renhorn Berg,</td>
              </tr>
              <tr>
                <td class="column1">Ludvig Larsson,</td>
                <td>Enid Sabotic,</td>
              </tr>
              <tr>
                <td class="column1">Fredrik Labani</td>
              </tr>
            </table>
          </p>
        </div>
        
        <div>
        <h2>Special Thanks To:</h2>
        </div>

        <div class="specialThanks">
         <p>
            Tower image:{" "}
            <a 
                href="https://www.pngall.com/tower-png/download/53122"
                target="_blank"
                rel="noopener noreferrer"
            >
                Tower PNG Image
            </a>
            
         </p>
        </div>

        <div class="specialThanks">
            <p>
                Music by Waterflame:{" "}
                <a
                href="https://www.youtube.com/channel/UCVuv5iaVR55QXIc_BHQLakA"
                target="_blank"
                rel="noopener noreferrer"
            >
                WaterflameMusic
            </a>
            
            </p>
        </div>

      </div>
    </div>
  );
};

export default CreditsHome;