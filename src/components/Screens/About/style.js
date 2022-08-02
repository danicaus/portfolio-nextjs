import styled, { css } from 'styled-components';
import breakpointsMedia from '../../themes/utils/breakpointsMedia';

const AboutStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  ${breakpointsMedia({
    xs: css`
      width: 100%;
    `,
    md: css`
      width: 70%;
    `,
  })}
`;

export default AboutStyle;
