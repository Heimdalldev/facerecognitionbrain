import React from 'react';
import { Tilt } from 'react-tilt';
import brain from './Brain.png';
import './Logo.css';


const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt br-100 .bw5 shadow-4 br' options={{ max : 55}} style={{  height: 250, width: 250 }}>
                <div className='Tilt-inner pa3'><img style={{paddingTop: '60px'}} alt='Logo' src={brain}/></div>
            </Tilt>

          
        </div>
    )
}


export default Logo;