import React from 'react'

import './TRCToggle.css'

function TRCToggle(props) {

    return (
        <div className="TRCToggle" onClick={props.onToggle}>
            <input type="checkbox" onChange={props.onToggle} checked={props.checked} />
            <label className="switch-label">
                <div className="switch-rail">
                    <div className="switch-slider" />
                </div>    
            </label>
        </div>
    )
}

export default TRCToggle
