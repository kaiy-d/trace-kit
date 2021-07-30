/*
    Clip List Item Bubble Component
*/

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { deleteBubble } from '../../redux/actions'

const ClipListItemBubbles = ({ bubbles, rowIndex }) => {
    const clips = useSelector(({ clips }) => clips)
    const dispatch = useDispatch()

    // remove bubble store and submit data to server
    const removeBubble = (i) => e => {
        e.preventDefault()
        clips[rowIndex].tags.splice(i, 1)
        dispatch(deleteBubble(clips))
    }

    return (
        <div className='clip-list-item-bubble__group'>
            {bubbles && bubbles.length > 0 && bubbles.map((bubble, i) => (
                <div key={i} className='clip-list-item-bubble__div'>
                    <button
                        className='clip-list-item-bubble'
                    >
                        {bubble.name}
                        {/* <div className='clip-list-item-bubble__close-icon-div'>
                            <img src='./close-icon.png' className='clip-list-item-close-icon' onClick={removeBubble} alt='' />
                        </div> */}
                    </button>
                </div>
            ))}
            {/* <div className='clip-list-item-add-icon-area'>
                <img src='./plus.png' className='clip-list-item-add__icon' alt='' />
            </div> */}
        </div>
    )
}

export default ClipListItemBubbles