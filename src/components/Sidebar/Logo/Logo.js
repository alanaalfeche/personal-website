import React from 'react';
import styled from 'styled-components';

import logo from './logo.png'


const Image = styled.img`
    width: 200px;
    height: 200px;
`;

function Logo() {
    return <Image src={logo} /> 
}

export default Logo;