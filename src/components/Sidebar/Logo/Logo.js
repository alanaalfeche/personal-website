import React from 'react';
import styled from 'styled-components';

import logo from './logo.png'


const Image = styled.img`
    width: 50px;
    height: 50px;
    margin: 15px;
`;

function Logo() {
    return <Image src={logo} /> 
}

export default Logo;