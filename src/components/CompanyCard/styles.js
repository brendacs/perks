import styled from 'styled-components';

export const Container = styled.div`
  width: 200px;
  display: ${props => props.visible ? 'flex' : 'none'};
  flex-direction: column;
  border-radius: 5px;
  padding: 25px;
  margin: 25px;
  background-color: white;
  -webkit-box-shadow: -1px 3px 20px -10px rgba(179,179,179,1);
  -moz-box-shadow: -1px 3px 20px -10px rgba(179,179,179,1);
  box-shadow: -1px 3px 20px -10px rgba(179,179,179,1);
`;

export const Header = styled.div`
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const Name = styled.h2`
  font-size: 28px;
`;

export const Close = styled.a`
  margin-top: -30px;
  margin-right: -10px;
  font-size: 16px;
  color: #e54444;

  &:hover {
    cursor: pointer;
    color: #ba3535;
  }
`;
