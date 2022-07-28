import styled, { css } from 'styled-components';
import breakpointsMedia from '../../themes/utils/breakpointsMedia';
import Text from '../Text';

// eslint-disable-next-line import/prefer-default-export
export const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 2vw;
`;

export const FooterLink = styled(Text)`
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
