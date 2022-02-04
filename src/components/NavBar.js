import React from 'react';
import './NavBarStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faCoffee, faCog } from '@fortawesome/free-solid-svg-icons'

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
                    </div>
            </nav>
        </div>
    )
}

export default NavBar;  