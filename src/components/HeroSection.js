import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>Artwork by Keya You</h1>
            <p>Learn more about the artist.</p>
            <div className="hero-btns">
            <Button address='/Artwork' className=
                'btn--primary' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                SEE PORTFOLIO <FontAwesomeIcon icon={['fas', 'folder-open']}/>
            </Button>
            </div>
        </div>
    )
}

export default HeroSection
