import styled from 'styled-components';

const BackgroundStyle = styled.div`
  height: 100vh;
  width: 100%;
  background-image: ${({ theme }) => (`
    linear-gradient(to top, ${theme.colors.black}, #00000000 20%),
    url("./assets/images/danicaus_b&w.png")
  `)};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom right -15%;
`;

export default BackgroundStyle;
