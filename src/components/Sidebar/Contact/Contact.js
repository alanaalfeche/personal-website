import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Email } from './email.svg';
import { ReactComponent as Github } from './github.svg';
import { ReactComponent as Linkedin } from './linkedin.svg';


const Div = styled.div`
    display: flex;
    margin: 50px 100px 10px 90px;
    text-align: center;
`;

class Contact extends React.Component {
    render() {
        return (
            <Div>
                <Email />
                <Github />
                <Linkedin />
            </Div>
        )
    }
}

export default Contact;