import styled from 'styled-components';

export const AlertContainer = styled.div`
  background-color: ${ props =>
    props.type === 'Success' ? '#23d15d' : 
      props.type === 'Warning' ? '#f2943c' :
        props.type === 'Error' ? '#e54444' :
          'transparent'
  };
  padding: 20px 20px 20px 30px;
  color: white;
  width: 50vw;
  height: 25px;
  position: fixed;
  top: 0;
  left: 25vw;
  display: ${props => props.showAlert ? 'flex' : 'none'};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const Link = styled.a`
  color: white;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
`;
