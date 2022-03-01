import React from 'react';
import './NavBarStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import CartWidget from './CartWidget';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


const element = <FontAwesomeIcon icon={faAngleDown} />

function NavBar(){
    return(
        <div className='navbar-container'>
            <nav>
                    <div className='navbar-button-container'>
                        <p className='navbar-logo'><Link to="/" className='link'>Mercante.</Link></p>
                        <p className='navbar-button'><Link to="/" className='link'>Inicio</Link></p>
                        <p className='navbar-button'><Link to="/" className='link'>Productos<FontAwesomeIcon icon={faAngleDown} size='xs'/></Link></p>
                        <p className='navbar-button'><Link to="/" className='link'>FAQ</Link></p>
                        <p className='navbar-button'><Link to="/" className='link'>Contacto</Link></p>
                        <div className='cartwidgetbutton'>
                            <CartWidget to='/cart'/>
                        </div>
                    </div>
            </nav>
        </div>
    )
}

export default NavBar;  
