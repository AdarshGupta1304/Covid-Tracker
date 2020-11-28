import React from 'react';
// import logo from '../../Images/covid19.png';
import covid from './Covida.png';
import './Logo.css';

const Logo = () => {

    return(
        <section>
            <h1 className="logo">C
            <img src={covid} className="rotate" alt="O" />
            VID19</h1>
        </section> 

    );

}

export default Logo;