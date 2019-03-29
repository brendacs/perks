import styled from 'styled-components';

export const AlertContainer = styled.div`
  background-color: ${ props =>
    props.type === 'Success' ? '#23d15d' : 
      props.type === 'Warning' ? '#f2943c' :
        props.type === 'Error' ? '#e54444' :
          'transparent'
  };
  padding: 20px 30px;
  color: white;
  width: 100vw;
  height: 25px;
  position: fixed;
  top: 0;
  left: 0;
  display: ${props => props.showAlert ? 'flex' : 'none'};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const Link = styled.a`
  color: white;
  font-size: 16px;
  position: absolute;
  top: 11px;
  right: 25px;

  &:hover {
    cursor: pointer;
  }
`;
