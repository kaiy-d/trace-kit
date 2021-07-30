import React from 'react'

import playPNG from '../../assets/img/play.png'
import './ClipListItemIndex.css'

const ClipListItemIndex = ({ selected, rowIndex }) => {

    return (
        <div className='clip-list-item-index'>
            {!selected ?
                (
                    <span className='clip-list-item-index-style'>
                        {rowIndex + 1}
                    </span>
                ) : (
                    <span>
                        <img src={playPNG} className='clip-list-item-play-icon' alt='' />
                    </span>
                )
            }
        </div>
    );
}

export default ClipListItemIndex