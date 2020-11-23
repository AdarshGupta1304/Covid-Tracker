import React from 'react';
import logo from '../../Images/covid19.png';
import './Logo.css';

import Image from 'react-bootstrap/Image';

const Logo = () => {

    return(
        <Image src={logo} className="logo" fluid/>    
    );

}

export default Logo;