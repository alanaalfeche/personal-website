import React from 'react';
import styled from 'styled-components';

import Sidebar from './components/Sidebar/Sidebar'
import Article from './components/Article/Article'

import data from './Articles.json'

const Container = styled.div`
  text-align: center;
  display: flex;
  width: 100vw;
`;

const Filters = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

const Filter = styled.h4`
  color: #202C39;
  text-align: left;
  padding: 15px;
  border: 1px solid #202c3929;
  background-color: #fedf599c;
  border-radius: 25px;
  margin-left: 10px;
`

const Articles = styled.div`
  width: 100vw;
  padding: 0px 20px;
  max-height: 100vh;
  overflow-y: scroll;
`;

class App extends React.Component {
  render() {
    const article = data.Articles;
    return (
      <Container>
        <Sidebar />
        <Articles>
          <Filters>
            {/* Make this active / non-active */}
            <Filter>250 words or less</Filter>
            <Filter>Filter2</Filter>
            <Filter>Filter3</Filter>
          </Filters>
          {
            article.map(a => (
              <Article
                title={a.title}
                date={a.date}
                summary={a.summary}
                citation={a.citation}
                tags={a.tags}
              />
            ))
          }
        </Articles>
      </Container>
    ) 
  }
}

export default App;
