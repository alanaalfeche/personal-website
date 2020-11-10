import React from 'react';
import styled from 'styled-components';

import Article from './components/Article/Article'
import Logo from './components/Logo/Logo'

import data from './Articles.json'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Articles = styled.div`
  padding: 20px;
`;

class App extends React.Component {
  render() {
    const article = data.Articles;
    return (
      <Container>
        <Logo />
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
