import React from 'react'

import './ClipsTab.css'

const ClipsTab = () => {

    return (
        <div className='clips_tab'>
            <ul>
                <li className='clips_tab__selected'>Selected Clips</li>
                <li className='clips_tab__unselected'>Bio</li>
                <li className='clips_tab__unselected'>Stats</li>
                <li className='clips_tab__unselected'>Games</li>
            </ul>
        </div>
    )
}

export default ClipsTab