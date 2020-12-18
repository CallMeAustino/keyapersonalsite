import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Button } from './Button.js';
import { useEffect} from 'react';

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        KEYA  
                        <FontAwesomeIcon style={{marginLeft: 15 }}icon={['fas', 'paint-brush']}/>
                    </Link>
                    <div className='menu-icon'>
                        <FontAwesomeIcon icon={click ? ['fas', 'times'] : ['fas', 'bars']} onClick={handleClick}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>About</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/artwork' className='nav-links' onClick={closeMobileMenu}>Artwork</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/experiences' className='nav-links' onClick={closeMobileMenu}>Experiences</Link>
                        </li>
                        <li className='nav-links-mobile'>
                            <Link to='/commission' className='nav-links' onClick={closeMobileMenu}>Commission</Link>
                        </li>
                    </ul>
                    {button && <Button address='/commission' buttonStyle='btn--outline'>Commission</Button>} 
                </div>
            </nav>    
        </>
    )
}

export default Navbar
