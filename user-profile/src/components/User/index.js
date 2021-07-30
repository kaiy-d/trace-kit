import React from 'react'

import { ReactComponent as TraceVerified } from '../../assets/img/trace-verified.svg'

import './User.css'

const User = () => {

    return (
        <div className='user'>
            <div className='user__avatar_div'>
                <div className='user__avatar'>
                </div>
            </div>
            <div className='user__profile'>
                <div className='user__traced_verified'>
                    <TraceVerified />
                    <span className='user_traced_verified_text'>
                        TRACE VERIFIED
                    </span>
                </div>
                <div>
                    <span className='user__name'>
                        David Villanueva
                    </span>
                </div>
                <div>
                    <span className='user__description'>
                        17yo | Ashphalt Green 02B
                    </span>
                </div>
            </div>
        </div>
    );
}

export default User