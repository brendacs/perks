import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 90px;
  border-bottom: 1px solid lightgray;
  padding: 10px 0;
  display: ${props => props.visible ? 'initial' : 'none'};
`;

export const Heading = styled.h3`
  font-size: 20px;
`;

export const Text = styled.p`
  font-size: 14px;
  display: ${props => props.show ? 'initial' : 'none'};
  margin: 15px 0;
  color: #3a3a3a;
`;

export const Link = styled.a`
  font-size: 16px;
  color: #1d9bfb;
  font-weight: normal;
  display: block;
  margin-top: 10px;

  &:hover {
    color: #1472ba;
    cursor: pointer;
  }
`;
