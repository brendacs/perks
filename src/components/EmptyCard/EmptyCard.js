import React, { Component } from 'react';
import { Container, Header, Title, Heading, Text, Link } from './styles';

class EmptyCard extends Component {
  render() {
    return (
      <Container visible={this.props.visible}>
        <Header>
          <Title>{this.props.title}</Title>
        </Header>
        <Heading>Company Sidebar</Heading>
        <Text>Using the list of companies, you can add another company to compare perks</Text>
        <Heading>Perks Sidebar</Heading>
        <Text>Using the list of perks, you can select a specific perk to compare</Text>
        <Heading>Using Search Bar</Heading>
        <Text>Using the search bar, you can add another company to compare perks</Text>
      </Container>
    );
  }
}

export default EmptyCard;
