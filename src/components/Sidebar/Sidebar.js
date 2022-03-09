import React from 'react';
import { Container, Section, Heading, LinkContainer, Link } from './styles';
import perks from '../../constants/perks.json';

const Sidebar = ({ addCard, comparePerk }) => {
  const companyPerks = perks["google"];
  const perkList = Object.keys(perks["google"]);
  const companyList = Object.keys(perks);

  return (
    <Container>
      <Section>
        <Heading>Companies</Heading>
        <LinkContainer>
          {
            companyList.sort().map((item, idx) => {
              return (
                <Link onClick={() => addCard(idx)}>
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
            perkList.map((item, idx) => {
              return (
                <Link onClick={() => comparePerk(idx)}>
                  {companyPerks[item].category}
                </Link>
              );
            })
          }
        </LinkContainer>
      </Section>
    </Container>
  );
};

export default Sidebar;
