import React from 'react'

import ClipsTab from './ClipsTab'
import ClipPlay from './ClipPlay'
import ClipList from './ClipList'

import './Clips.css'

const Clips = ({ clipList }) => {

    return (
        <div className='clips'>
            <div className='clips__tab'>
                <ClipsTab />
            </div>
            <div className='clips__list'>
                <ClipPlay />
                <ClipList clipList={clipList} />
            </div>
        </div>
    )
}

export default Clips