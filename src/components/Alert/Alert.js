import React from 'react';
import { AlertContainer, Link } from './styles.js';

const Alert = ({ text, type, showAlert, closeAlert }) => {
  return (
    <AlertContainer type={type} showAlert={showAlert}>
      {text}
      <Link onClick={closeAlert}>x</Link>
    </AlertContainer>
  );
};

export default Alert;
