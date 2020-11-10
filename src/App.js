import React from 'react';
import styled from 'styled-components';

import Article from './components/Article/Article'

import data from './Articles.json'

const Container = styled.div`
  text-align: center;
  display: flex;
  width: 100vw;
`;

const Articles = styled.div`
  width: 100vw;
  padding: 20px;
  max-height: 100vh;
  overflow-y: scroll;
`;

class App extends React.Component {
  render() {
    const article = data.Articles;
    return (
      <Container>
        <Articles>
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
