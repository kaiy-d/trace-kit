import React from 'react'

import './ClipPlay.css'

const ClipPlay = () => {

  return (
    <div className='clip-play'>
        <div className='clip-play-label'>Autoplay</div>
        <div className="switch-container">
            <input type="checkbox" id="switch" />
            <label htmlFor="switch" className="switch-label">
                <div className="switch-rail">
                    <div className="letterOn">On</div>
                    <div className="switch-slider"></div>
                    <div className="letterOff">Off</div>
                </div>
            </label>
        </div>
    </div>
  );
}

export default ClipPlay;
