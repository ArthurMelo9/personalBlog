import React from 'react';
import Logo from '../Logo';
import Navbar from '../Navbar';
import Card from '../UI/Card';

/**
* @author
* @function Hero
**/

const Hero = (props) => {
    return (
        <div>
            <Card>
                <div style={{ padding: '50px 0' }}>

                </div>
                <Logo />
                <Navbar />
            </Card>
        </div>
    );

}

export default Hero;