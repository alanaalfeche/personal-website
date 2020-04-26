import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Logo } from './grad_cap.svg';

const Container = styled.div`
    display: flex;
    margin: 10px;
`;

const Details = styled.div`
    color: white;
    text-align: left;
`;

class School extends React.Component {
    render() {
        return (
            <Container>
                <Logo />
            <div>
                <Details>{this.props.degree}</Details>
                <Details>{this.props.school}</Details>
            </div>
            </Container>
        )
    }
}

export default School;