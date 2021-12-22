import React from 'react'
import './Header.css'


const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="logo">
                    Logo
                </div>
            </div>

            <div className="menu">
                <div className="menu-item">About</div>
                <div className="menu-item">Journal</div>
                <div className="menu-item">Contact</div>
            </div>
            
        </div>
    )
}

export default Header
