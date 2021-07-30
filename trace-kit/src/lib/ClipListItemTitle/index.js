/*
  Clip List Item Title Component
*/

import React from 'react'

import './ClipListItemTitle.css'

const ClipListItemTitle = ({ title }) => {
    return (
        <div className='clip-list-item-title'>
            {title}
        </div>
    );
}

export default ClipListItemTitle;
