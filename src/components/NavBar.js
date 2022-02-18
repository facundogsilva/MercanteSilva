import React from 'react';
import './NavBarStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import CartWidget from './CartWidget';


const element = <FontAwesomeIcon icon={faAngleDown} />

function NavBar(){
    return(
        <div className='navbar-container'>
            <nav>
                    <div className='navbar-button-container'>
                        <p className='navbar-logo'>Mercante.</p> 
                        <p className='navbar-button'>Inicio</p>
                        <p className='navbar-button'>Productos<FontAwesomeIcon icon={faAngleDown} size='xs'/></p>
                        <p className='navbar-button'>FAQ</p>
                        <p className='navbar-button'>Contacto</p>
                        <div className='cartwidgetbutton'>
                            <CartWidget/>
                        </div>
                    </div>
            </nav>
        </div>
    )
}

export default NavBar;  
