import React, { Component } from 'react';
import { Container, Section, Heading, Text, LinkContainer, Link } from './styles';
import perks from '../../constants/perks.json';

class Sidebar extends Component {
  render() {
    const companyPerks = perks["google"];
    const perkList = Object.keys(perks["google"]);

    return (
      <Container>
        <Section>
          <Heading>Companies</Heading>
          <LinkContainer>
            <Link onClick={() => this.props.addCard(0)}>Google</Link>
            <Link onClick={() => this.props.addCard(1)}>Facebook</Link>
            <Link onClick={() => this.props.addCard(2)}>Amazon</Link>
            <Link onClick={() => this.props.addCard(3)}>Microsoft</Link>
            <Link onClick={() => this.props.addCard(4)}>Uber</Link>
          </LinkContainer>
        </Section>
        <Section>
          <Heading>Perks</Heading>
          <LinkContainer>
            {
              perkList.map(item => {
                return (
                  <Link>{companyPerks[item].category}</Link>
                );
              })
            }
          </LinkContainer>
        </Section>
      </Container>
    );
  }
}

export default Sidebar;
