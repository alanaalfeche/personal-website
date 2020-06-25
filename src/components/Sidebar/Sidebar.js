import React from 'react';
import styled from 'styled-components';

import Logo from './Logo/Logo';
import School from './School/School';
import Contact from './Contact/Contact';


const Div = styled.div`
    background-color: #202C39;
    min-height: 100vh;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
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
                <Text>
                My purpose for this web-app is to share notes and how-to-guides on subjects that perks my interest. Currently I am seeking the breadth of knowledge in bioinformatics, software engineering, and data science. Once I gain mastery of each domain and find a way to integrate my interests, only then will my ultimate goal of becoming an expert in my own niche will be realize. 
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
