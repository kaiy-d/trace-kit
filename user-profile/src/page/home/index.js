import React from 'react'

import VideoComponent from '../../components/Video'
import User from '../../components/User'
import Clips from '../../components/Clips'

import './Home.css'

const Home = ({ clips }) => {

    return (
        <div className='home'>
            <div className='home__video'>
                <VideoComponent />
            </div>
            <div className='home__user'>
                <User />
            </div>
            <div className='home__clips'>
                <Clips clipList={clips} />
            </div>
        </div>
    );
}

export default Home