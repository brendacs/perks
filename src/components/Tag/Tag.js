import React from 'react';
import { TagContainer } from './styles.js';

const Tag = ({ text, type }) => {
  return (
    <TagContainer type={type}>{text}</TagContainer>
  );
};

export default Tag;
