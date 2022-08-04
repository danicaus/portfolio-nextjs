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
  position: relative;
  ${breakpointsMedia({
    xs: css`
      color: ${({ hoverColor }) => hoverColor};

      &::after {
        content: '';
      }
    `,
    md: css`
      color: inherit;
      
      &:hover {
        color: ${({ hoverColor }) => hoverColor};
      }

      &::after {
        content: '';
      }

      &:hover::after {
        content: '${({ icon }) => (icon ? `\\${icon}` : '')}';
        position: absolute;
        font-family: "FontAwesome";
        margin-left: 1rem;
      }
    `,
  })}
`;

const LinkIcon = styled.span`
  font-family: "FontAwesome";
  font-size: 3rem;
`;

export default {
  Wrapper,
  Link,
  LinkIcon,
};
