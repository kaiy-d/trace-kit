import React from 'react'

import closeSVG from '../../assets/img/close-x.svg'

import './ClipListItemBubble.css'

const ClipListItemBubble = ({ bubble }) => {

    return (
        <div className='clip-list-item-bubble'>
            <button className='clip-list-item-bubble-style'>
                {bubble.name}
                <div className='clip-list-item-close-icon-div'>
                    <img src={closeSVG} className='clip-list-item-close-icon' alt='' />
                </div>
            </button>
        </div>
    );
}

export default ClipListItemBubble