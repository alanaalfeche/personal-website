import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 100%;
    text-align: left;
    word-wrap: break-word;
`;

const Tag = styled.p`
    text-align: right;
    color: grey;
`
class Article extends React.Component {
    render() {
        return (
            <Container>
                <div style={{ padding: 20 }}>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.date}</p>
                    <p style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: this.props.summary }}/>
                    <p>{this.props.citation}</p>
                    <Tag>{this.props.tags}</Tag>
                    <hr style={{border: '1px solid rgb(238 238 238)'}}></hr>
                </div>
            </Container>
        )
    }

}

export default Article;