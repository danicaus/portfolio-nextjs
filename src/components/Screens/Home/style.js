import styled from 'styled-components';

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-image:
    linear-gradient(#000, #000), 
    url("./assets/images/backgroundImage.jpg");
  background-size: cover;
  background-blend-mode: saturation;
`;

export default Background;
