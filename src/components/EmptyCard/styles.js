import styled from 'styled-components';

export const Container = styled.div`
  width: 200px;
  display: ${props => props.visible ? 'flex' : 'none'};
  flex-direction: column;
  border-radius: 5px;
  padding: 25px;
  margin: 25px;
  background-color: white;
  border: 1px dashed #1472ba;
`;

export const Header = styled.div`
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: 28px;
`;

export const Heading = styled.h3`
  font-size: 20px;
`;

export const Text = styled.p`
  font-size: 14px;
  margin: 15px 0 30px 0;
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
