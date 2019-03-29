import React, { Component } from 'react';
import { Container, Header, Name, ViewAllLink, Close } from './styles';
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
          perkList.map((item, idx) => {
            return (
              <Tile
                heading={companyPerks[item].category}
                text={companyPerks[item].text}
                tag={companyPerks[item].tag}
                visible={this.props.perks === -1 || this.props.perks === idx}
              />
            );
          })
        }
        <ViewAllLink
          visible={this.props.perks !== -1}
          onClick={() => this.props.comparePerk(-1)}
        >
          View all perks &rarr;
        </ViewAllLink>
      </Container>
    );
  }
}

export default CompanyCard;
