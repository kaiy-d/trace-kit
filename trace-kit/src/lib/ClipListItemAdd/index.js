import React from 'react'

import { ReactComponent as AddIcon } from '../../assets/img/components/icons/add.svg';

import './ClipListItemAdd.css'

const ClipListItemAdd = () => {
    return (
        <div className='clip-list-item-add'>
            <AddIcon className='clip-list-item-add-icon' />
        </div>
    );
}

export default ClipListItemAdd