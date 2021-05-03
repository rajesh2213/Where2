// import src from '*.avif'
import      React from 'react';
import '../App.css'
import './pages/Home.css';
import { Button } from './Button';
import videos from "./asset/video-2.mp4"
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
        <video autoPlay loop muted>
            <source src={videos} type="video/mp4" />
        </video>
            <h1>ADVENTURE awaits</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    path='/flights'
                >
                    BOOK YOUR TICKETS
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    Download our mobile app <i class="fa fa-download" aria-hidden="true"></i>
                </Button>

                
            </div>     
           
        </div>    
    );
}

export default HeroSection