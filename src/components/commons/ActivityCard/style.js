import styled, { css } from 'styled-components';
import breakpointsMedia from '../../themes/utils/breakpointsMedia';
import Text from '../Text';

const Wrapper = styled.li`
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.pink};
  border-radius: 0.5rem;
  padding: 3rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Header = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-bottom: -0.5rem;
`;

const Links = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 1.6rem;
  ${breakpointsMedia({
    xs: css`
      flex-direction: column;
    `,
    md: css`
      flex-direction: row;
    `,
  })}
`;

const Link = styled(Text)`
  text-transform: uppercase;
  transition: 0.2s;
  
  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export default {
  Wrapper,
  Header,
  Links,
  Link,
};
