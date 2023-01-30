import './Hero.css';
import About from './About';
import React from 'react';
import ReactDOM from 'react-dom/client';

function Hero() {

    function explore() {
        const root = ReactDOM.createRoot(document.getElementById('root2'));
        root.render(
        
            <About />
        
        );
    }

    return (
    <div className='hero' id="hero">
        <div className='hero-sec'>
            <div className='writing'>
                <h1>LET'S TRAVEL TO BINTAN</h1>
                <h2>WITH <span>BINTAN TRAVEL</span> </h2>
                <p>We are a Tour Service Provider in Bintan. Always serve you with our best.</p>
                <button onClick={explore}><a href="#root2">Explore Our Island</a></button>
                <img id='gambar'
                    src='hero-image.png'
                />
            </div> 
        </div>
    </div>
    )
}

export default Hero;