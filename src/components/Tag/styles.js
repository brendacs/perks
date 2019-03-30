import styled from 'styled-components';

export const TagContainer = styled.p`
  background-color: ${ props =>
    props.type === 'Excellent' ? '#23d15d' : 
      props.type === 'Good' ? '#5fef88' :
        props.type === 'Fair' ? '#e2e222' :
          props.type === 'Poor' ? '#f2943c' :
            props.type === 'None' ? '#e54444' :
              props.type === 'Unknown' ? '#1d9bfb' :
              '#fff'
  };
  padding: 5px 10px;
  border-radius: 5px;
  color: white;
  margin: 10px 0;
`;
