import React from 'react';
import './NavBarStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'


const element = <FontAwesomeIcon icon={faAngleDown} />

function NavBar(){
    return(
        <div className='navbar-container'>
            <nav>
                    <div className='navbar-button-container'>
                        <p className='navbar-logo'><Link to="/" className='link'>Mercante.</Link></p>
                        <p className='navbar-button'><Link to="/" className='link'>Inicio</Link></p>
                        <div class="dropdown">
                            <button class="dropbtn">Productos <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></button>
                                    <div className="dropdown-content">
                                        <Link to='/product/categoria/textiles'>Textiles</Link>
                                        <Link to='/product/categoria/oficina'>Oficina</Link>
                                        <Link to='/product/categoria/otros'>Otros</Link>
                                    </div>
                        </div>
                        <p className='navbar-button'><Link to="/" className='link'>FAQ</Link></p>
                        <p className='navbar-button'><Link to="/" className='link'>Contacto</Link></p>
                        <div className='cartwidgetbutton'>
                        <Link to='/cart'>
                            <CartWidget />
                         </Link>
                        </div>
                    </div>
            </nav>
        </div>
    )
}

export default NavBar;  
