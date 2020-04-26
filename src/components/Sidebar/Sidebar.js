import React from 'react';
import styled from 'styled-components';

import Logo from './Logo/Logo';
import School from './School/School';
import Contact from './Contact/Contact';


const Div = styled.div`
    background-color: #202C39; //#1c315f #152b5a #355e9a #135888 #253233 #202C39
    min-height: 100vh;
    max-width: 350px;
`;

const Header = styled.h1`
    color: white;
    margin-bottom: 0px;
`;

const Subheader = styled.h3`
    color: white;
    margin: 0px;
    font-weight: 300;
`;

const Text = styled.p`
    color: white;
    text-align: justify;
    margin: 40px 15px;
`;

class Sidebar extends React.Component {
    render() {
        return (
            <Div>
                <Logo />
                <Header>Alana Alfeche</Header>
                <Subheader>Data Engineer</Subheader>
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
                <School 
                    degree="M.S. Bioinformatics"
                    school="Johns Hopkins University"
                />
                <School
                    degree="B.S. Material Science & Engineering"
                    school="University of Illinois Urbana - Champaign"
                />
                <Contact />
            </Div>
        )
    }

}

export default Sidebar;
