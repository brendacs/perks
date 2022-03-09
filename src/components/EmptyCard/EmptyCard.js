import React, { useState } from 'react';
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

const EmptyCard = ({title, visible, addCard}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const updateSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  }

  const companyList = Object.keys(perks);

  return (
    <Container visible={visible}>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Heading>Company Sidebar</Heading>
      <Text>Add another company to compare perks</Text>
      <Heading>Perks Sidebar</Heading>
      <Text>Select a specific perk to compare</Text>
      <Heading>Company Search</Heading>
      <form autocomplete="off">
        <SearchBar
          placeholder="Find a company"
          onChange={updateSearch}
        />
      </form>
      <LinkContainer>
        {
          companyList.sort().map((item, idx) => {
            return (
              <Link
                onClick={() => addCard(idx)}
                visible={item.toLowerCase().startsWith(searchTerm) && searchTerm !== ""}
              >
                {item.charAt(0).toUpperCase() + item.substring(1)}
              </Link>
            );
          })
        }
      </LinkContainer>
    </Container>
  );
};

export default EmptyCard;
