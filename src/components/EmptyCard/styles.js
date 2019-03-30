import styled from 'styled-components';

export const Container = styled.div`
  width: 15vw;
  display: ${props => props.visible ? 'flex' : 'none'};
  flex-direction: column;
  border-radius: 5px;
  padding: 25px;
  margin: 2.5vw;
  background-color: white;
  border: 1px dashed #1472ba;

  @media screen and (max-width: 1024px) {
    width: 200px;
  }
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
  margin-top: 10px;
`;

export const Text = styled.p`
  font-size: 14px;
  margin: 15px 0 30px 0;
  color: #3a3a3a;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Link = styled.a`
  font-size: 16px;
  margin-bottom: 5px;
  color: #1d9bfb;
  font-weight: normal;
  display: ${props => props.visible ? 'initial' : 'none'};

  &:hover {
    color: #1472ba;
    cursor: pointer;
  }
`;

export const SearchBar = styled.input`
  padding: 5px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #1d9bfb;
  outline: none;
  width: 90%;
  margin-top: 15px;
  margin-bottom: 15px;
  -webkit-box-shadow: -1px 3px 20px -10px rgba(179,179,179,1);
  -moz-box-shadow: -1px 3px 20px -10px rgba(179,179,179,1);
  box-shadow: -1px 3px 20px -10px rgba(179,179,179,1);
`;
