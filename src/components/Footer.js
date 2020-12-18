import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderNone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-wrapper'>
                <div className='footer-information'>
                    <section className='col about'>
                        <h4>ABOUT</h4>
                        <ul className='footer-ul'>
                            <Link to="/about"><li>Keya You</li></Link>
                            <Link to="/portfolio"><li>Projects</li></Link>
                        </ul>
                    </section>
                    <section className='col socials'>
                        <h4>PROFESSIONAL</h4>
                        <ul className='footer-ul'>
                           <a target="_blank" rel="noreferrer" href="https://soeffects.com/"><li>Second Order Effects</li></a>
                        </ul>
                    </section>
                </div>
                <div className='copyright'>
                    <section>© 2020 Keya You, Inc. All rights reserved · Privacy · Terms · Sitemap</section>
                    <section>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/keya-you-8976abba/"><FontAwesomeIcon style={{marginLeft: 15 }}icon={['fab', 'linkedin']}/></a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/tamaeki/?hl=en"><FontAwesomeIcon style={{marginLeft: 15 }}icon={['fab', 'instagram']}/></a>
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/tamaeki"><FontAwesomeIcon style={{marginLeft: 15 }}icon={['fab', 'facebook']}/></a>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/tamaeki?lang=en"><FontAwesomeIcon style={{marginLeft: 15 }}icon={['fab', 'twitter']}/></a>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Footer
