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
                The purpose of this website is to share notes and how-to guides on subjects that pique my curiosity. My areas of interest are bioinformatics, software engineering, and data science. Unifying these three fields is my ultimate goal. 
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
