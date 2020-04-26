import React from 'react';
import styled from 'styled-components';

import Logo from './Logo/Logo';
import School from './School/School';
import Contact from './Contact/Contact';


const Div = styled.div`
    background-color: #202C39; //#1c315f #152b5a #355e9a #135888 #253233 #202C39
    min-height: 100vh;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const Header = styled.h1`
    color: white;
    margin: 0px;
`;

const Subheader = styled.h3`
    color: white;
    font-weight: 300;
    margin:0px;
`;

const Text = styled.p`
    color: white;
    text-align: justify;
    margin: 0px 15px;
    font-size: 15px;
`;

class Sidebar extends React.Component {
    render() {
        return (
            <Div>
                <div style={{ textAlign: 'center' }}>
                    <Logo />
                </div>
                <div>
                    <Header>Alana Alfeche</Header>
                    <Subheader>Engineer ϟ Bioinformatician</Subheader>
                </div>

                <Text>
                I participated in Capital One’s first software engineering boot camp for six months before starting my career as a Data Engineer. My previous experience as a published researcher served me well following the bootcamp as I was tasked with projects in exploring proof-of-concepts for new AWS services such as Neptune, Aurora, and Athena. My expertise in databases earned me a nomination to AWS Data Hero in 2019. Currently, I am part of a great initiative in modernizing the rewards platform for external partners at Capital One. 
                </Text>
                <div>
                    <School 
                        degree="M.S. Bioinformatics"
                        school="Johns Hopkins University"
                    />
                    <School 
                        degree="B.S. Material Science & Engr."
                        school="University of Illinois U-C"
                    />
                </div>
                <Contact />
            </Div>
        )
    }

}

export default Sidebar;
