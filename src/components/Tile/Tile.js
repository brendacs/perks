import React, { Component } from 'react';
import { Container, Heading, Text, Link } from './styles';
import Tag from '../Tag/Tag';

class Tile extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    }
  }

  expandTile = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const {heading, tag, text} = this.props;

    return (
    <Container>
        <Heading>{heading}</Heading>
        <Tag text={tag} type={tag} />
        <Text show={this.state.expanded}>{text}</Text>
        <Link onClick={this.expandTile}>
          {!this.state.expanded ? 'Learn more...' : 'Show less'}
        </Link>
      </Container>
    );
  }
}

export default Tile;
