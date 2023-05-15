import React from 'react';
import logo from './로고.png';
import text from './쇼핑몰 이름.png'


function Header () {
    return (
        <header>
            <div className='logo'>
                <img src={logo} alt="" />
                <img src={text} alt="" />
            </div>
        </header>
    )
}

export default Header;