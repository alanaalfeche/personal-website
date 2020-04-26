import React from 'react';
import styled from 'styled-components';

import Sidebar from './components/Sidebar/Sidebar'


const Container = styled.div`
  text-align: center;
  display: flex;
  width: 100vw;
`;

const Header = styled.h2`
  color: #202C39;
`

const Articles = styled.div`
  width: 100vw;
  padding: 20px;
`;

const Article = styled.div`
  height: 250px;
  width: 100%;
  border: 1px solid #202C39;
`;

function App() {
  return (
    <Container>
      <Sidebar />
      <Articles>
        <Header>Recent Articles</Header>
        <Article>
          <p>Title</p>
          <p>mm/dd/yyyy</p>
        </Article>
      </Articles>
    </Container>
  );
}

export default App;
