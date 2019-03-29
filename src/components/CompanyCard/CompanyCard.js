import React, { Component } from 'react';
import { Container, Header, Name, Close } from './styles';
import Tile from '../Tile/Tile';
import perks from '../../constants/perks.json';

class CompanyCard extends Component {
  render() {
    const company = this.props.company;
    const companyPerks = perks[company];
    const perkList = Object.keys(perks[company]);

    return (
      <Container visible={this.props.visible} color={this.props.color}>
        <Header>
          <Name>{company.charAt(0).toUpperCase() + company.substring(1)}</Name>
          <Close onClick={this.props.closeCard}>X</Close>
        </Header>
        {
          perkList.map(item => {
            return (
              <Tile
                heading={companyPerks[item].category}
                text={companyPerks[item].text}
                tag={companyPerks[item].tag}
              />
            );
          })
        }
      </Container>
    );
  }
}

export default CompanyCard;
