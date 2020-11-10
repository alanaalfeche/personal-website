import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    min-height: 250px;
    width: 100%;
    border: 1px solid #212c3926;
    text-align: left;
    margin-bottom: 20px;
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
                </div>
            </Container>
        )
    }

}

export default Article;