import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Email } from './email.svg';
import { ReactComponent as Github } from './github.svg';
import { ReactComponent as Linkedin } from './linkedin.svg';


const Div = styled.div`
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    padding: 20px;
`;

const Info = styled.a`

`;

class Contact extends React.Component {
    render() {
        return (
            <Div>
                <Info href=""><Email /></Info>
                <Info href="https://github.com/alanaalfeche"><Github /></Info>
                <Info href="https://www.linkedin.com/in/alanaalfeche/"><Linkedin /></Info>
            </Div>
        )
    }
}

export default Contact;