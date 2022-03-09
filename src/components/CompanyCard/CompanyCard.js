import React, { useState } from 'react';
import { Container, Header, Name, CardLink, Close } from './styles';
import Tile from '../Tile/Tile';
import perksData from '../../constants/perks.json';

const CompanyCard = ({ company, closeCard, perks, comparePerk }) => {
  const [allExpanded, setAllExpanded] = useState(false);

  const companyPerks = perksData[company];
  const perkList = Object.keys(perksData[company]);

  return (
    <Container>
      <Header>
        <div>
          <Name>{company.charAt(0).toUpperCase() + company.substring(1)}</Name>
          <CardLink
            visible
            onClick={() => setAllExpanded(!allExpanded)}
          >
            {!allExpanded ? "Expand all" : "Compress all"}
          </CardLink>
        </div>
        <Close onClick={closeCard}>X</Close>
      </Header>
      {
        perkList.map((item, idx) => {
          return (
            <Tile
              heading={companyPerks[item].category}
              text={companyPerks[item].text}
              tag={companyPerks[item].tag}
              visible={perks === -1 || perks === idx}
              allExpanded={allExpanded}
            />
          );
        })
      }
      <CardLink
        visible={perks !== -1}
        onClick={() => comparePerk(-1)}
      >
        View all perks &rarr;
      </CardLink>
    </Container>
  );
};

export default CompanyCard;
