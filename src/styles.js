import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Header = styled.div`
  height: 210px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Heading = styled.h1`
  font-size: 40px;
  margin-bottom: 10px;

  @media screen and (max-width: 1024px) {
    font-size: 30px;
  }
`;

export const SubHeading = styled.h1`
  font-size: 20px;
  color: #3a3a3a;
  margin: 5px 0;
`;

export const Link = styled.a`
  font-size: 16px;
  margin-bottom: 5px;
  color: #1d9bfb;
  font-weight: normal;
  text-decoration: none;

  &:hover {
    color: #1472ba;
    cursor: pointer;
  }
`;

export const Text = styled.p`
  font-weight: normal;
`;
