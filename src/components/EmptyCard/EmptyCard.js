import React, { Component } from 'react';
import { Container, Header, Title, Heading, Text, Link } from './styles';

class EmptyCard extends Component {
  render() {
    return (
      <Container visible={this.props.visible}>
        <Header>
          <Title>{this.props.title}</Title>
        </Header>
        <Heading>{this.props.subtitle}</Heading>
        <Text>{this.props.text}</Text>
        <Heading>{this.props.altSubtitle}</Heading>
        <Text>{this.props.altText}</Text>
      </Container>
    );
  }
}

export default EmptyCard;
