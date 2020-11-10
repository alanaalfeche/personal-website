import React from 'react';
import styled from 'styled-components';

import logo from './logo.png'


const Image = styled.img`
    margin-top: 20px;
    width: 100px;
    height: 100px;
`;

function Logo() {
    return <Image src={logo} /> 
}

export default Logo;
