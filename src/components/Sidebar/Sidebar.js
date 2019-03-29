import React, { Component } from 'react';
import { Container, Section, Heading, Text, LinkContainer, Link } from './styles';
import perks from '../../constants/perks.json';

class Sidebar extends Component {
  render() {
    const companyPerks = perks["google"];
    const perkList = Object.keys(perks["google"]);
    const companyList = Object.keys(perks);

    return (
      <Container>
        <Section>
          <Heading>Companies</Heading>
          <LinkContainer>
            {
              companyList.map((item, idx) => {
                return (
                  <Link onClick={() => this.props.addCard(idx)}>
                    {item.charAt(0).toUpperCase() + item.substring(1)}
                  </Link>
                );
              })
            }
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
