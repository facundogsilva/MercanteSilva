import React from 'react'
import './FooterStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faMapPin,faEnvelope,faPhone, } from '@fortawesome/free-solid-svg-icons'

function Footer () {
return (
    <>
    <div className='footer-container'>
        <div className='footer-column-1'>
        <div className='footer-title'>Redes</div>
            <h1 className='footer-text'><FontAwesomeIcon icon={faUser} size='xs'/> Instagram </h1>
            <h1 className='footer-text'><FontAwesomeIcon icon={faUser} size='xs'/> Facebook</h1>
        </div>
        <div className='footer-column-2'></div>
        <div className='footer-column-3'>
            <div className='footer-title'>Contacto</div>
            <h1 className='footer-text'><FontAwesomeIcon icon={faMapPin} size='xs'/> Carlos Calvo 632, San Telmo, CABA.</h1>
            <h1 className='footer-text'><FontAwesomeIcon icon={faEnvelope} size='xs'/> contacto@mercante.com</h1>
            <h1 className='footer-text'><FontAwesomeIcon icon={faPhone} size='xs'/> 011-457486</h1>
        </div>
    </div>
    
    </>
)}





export default Footer