import React from 'react'

import { ReactComponent as TopBarMenuBtn } from '../../assets/img/topbar-menu-btn.svg'
import { ReactComponent as TopBarLogo } from '../../assets/img/topbar-logo.svg'

import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <TopBarMenuBtn className='header__menu' />
            <TopBarLogo className='header__logo' />
            <button className='header__share'>
                Share
            </button>
        </div>
    );
}

export default Header