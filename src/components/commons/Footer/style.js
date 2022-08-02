import styled, { css } from 'styled-components';
import breakpointsMedia from '../../themes/utils/breakpointsMedia';
import Text from '../Text';

const Wrapper = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 3rem 2vw;
`;

const Link = styled(Text)`
  ${breakpointsMedia({
    xs: css`
      color: ${({ hoverColor }) => hoverColor};
    `,
    md: css`
      color: inherit;
      
      &:hover {
        color: ${({ hoverColor }) => hoverColor};
      }
    `,
  })}
`;

export default {
  Wrapper,
  Link,
};
