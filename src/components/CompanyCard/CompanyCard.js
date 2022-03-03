import React, { Component } from 'react';
import { Container, Header, Name, CardLink, Close } from './styles';
import Tile from '../Tile/Tile';
import perks from '../../constants/perks.json';

class CompanyCard extends Component {
  constructor() {
    super();
    this.state = {
      allExpanded: false,
    }
  }

  render() {
    const company = this.props.company;
    const companyPerks = perks[company];
    const perkList = Object.keys(perks[company]);

    return (
      <Container>
        <Header>
          <div>
            <Name>{company.charAt(0).toUpperCase() + company.substring(1)}</Name>
            <CardLink
              visible
              onClick={() => this.setState({ allExpanded: !this.state.allExpanded })}
            >
              {!this.state.allExpanded ? "Expand all" : "Compress all"}
            </CardLink>
          </div>
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
                allExpanded={this.state.allExpanded}
              />
            );
          })
        }
        <CardLink
          visible={this.props.perks !== -1}
          onClick={() => this.props.comparePerk(-1)}
        >
          View all perks &rarr;
        </CardLink>
      </Container>
    );
  }
}

export default CompanyCard;
