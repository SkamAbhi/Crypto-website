import React from 'react'
import Herologo from '../Assets/logo1 (1).png'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
        
         {/* left side */}
            <div className='left'>
                <h1>
                    Buy Sell & Accept <br/>
                    Digital Asset
                </h1>
                <p className='hero-details'>
                Sign up today to easily buy<br/>
                <strong>90+ cryptocurrencies.</strong><br/> Get started in minutes with
                 as little as <strong> $10. </strong>
                </p>
                <div className='button'>
                 <button className='btn'>
                    Get started with $10   
                 </button>
                 </div>
            </div>


         {/* Right side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={Herologo} alt='hero-img'></img>
                    </div>
                </div>
        </div>

    </div>
  )
}

export default Hero