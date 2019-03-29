import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 90px;
  border-bottom: 1px solid lightgray;
  padding: 10px 0;

  &:last-child {
    border-bottom: none;
  }
`;

export const Heading = styled.h3`
  font-size: 20px;
`;

export const Text = styled.p`
  font-size: 14px;
  display: ${props => props.show ? 'block' : 'none'};
  margin: 15px 0;
  color: #3a3a3a;
`;

export const Link = styled.a`
  font-size: 16px;
  color: #1d9bfb;
  font-weight: normal;

  &:hover {
    color: #1472ba;
    cursor: pointer;
  }
`;
