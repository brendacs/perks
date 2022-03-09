import React, { useState } from 'react';
import { Container, Heading, Text, Link } from './styles';
import Tag from '../Tag/Tag';

const Tile = (props) => {
  const [expanded, setExpanded] = useState(false);

  const expandTile = () => {
    setExpanded(!expanded);
  }

  const {heading, tag, text, allExpanded, visible} = props;

  return (
    <Container allExpanded={allExpanded} visible={visible}>
      <Heading>{heading}</Heading>
      <Tag text={tag} type={tag} />
      <Text show={expanded || allExpanded}>{text}</Text>
      {allExpanded ? null :
        <Link onClick={expandTile}>
          {!expanded ? 'Learn more...' : 'Show less'}
        </Link>
      }
    </Container>
  );
};

export default Tile;
