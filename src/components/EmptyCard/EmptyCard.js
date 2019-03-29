import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Heading,
  Text,
  LinkContainer,
  Link,
  SearchBar
} from './styles';
import perks from '../../constants/perks.json';

class EmptyCard extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ""
    }
  }

  updateSearch = (e) => {
    this.setState({ searchTerm: e.target.value.toLowerCase() });
  }

  render() {
    const companyList = Object.keys(perks);

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
        <form autocomplete="off">
          <SearchBar
            placeholder="Find a company"
            onChange={this.updateSearch}
          />
        </form>
        <LinkContainer>
          {
            companyList.map((item, idx) => {
              const { searchTerm } = this.state;
              return (
                <Link
                  onClick={() => this.props.addCard(idx)}
                  visible={item.toLowerCase().startsWith(searchTerm) && searchTerm != ""}
                >
                  {item.charAt(0).toUpperCase() + item.substring(1)}
                </Link>
              );
            })
          }
        </LinkContainer>
      </Container>
    );
  }
}

export default EmptyCard;
