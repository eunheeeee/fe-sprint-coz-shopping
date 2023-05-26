import React from 'react';
import './Header.css'
import logo from '../img/로고.png';
import text from '../img/쇼핑몰 이름.png'
import ham from '../img/아이콘.png'


function Header () {
    return (
        <header>
            <div className='inner'>
                <div className='logo'>
                    <img src={logo} alt="" />
                    <img src={text} className='coz' alt="" />
                </div>
                <div className='gnb'>
                <img src={ham} alt="" />
                </div>
            </div>
        </header>
    )
}

export default Header;