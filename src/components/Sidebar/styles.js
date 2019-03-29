import styled from 'styled-components';

export const Container = styled.div`
  width: 200px;
  margin: 25px 0 25px 25px;
`;

export const Section = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;
  }
`;

export const Heading = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Text = styled.h2`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Link = styled.a`
  font-size: 16px;
  margin-bottom: 5px;
  color: #1d9bfb;
  font-weight: normal;

  &:hover {
    color: #1472ba;
  }
`;
