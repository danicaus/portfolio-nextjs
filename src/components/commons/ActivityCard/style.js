import styled, { css } from 'styled-components';
import breakpointsMedia from '../../themes/utils/breakpointsMedia';
import Text from '../Text';

export const Wrapper = styled.li`
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.pink};
  border-radius: 0.5rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Header = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  margin-bottom: -0.5rem;
`;

export const Links = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 1rem;
  ${breakpointsMedia({
    xs: css`
      flex-direction: column;
    `,
    md: css`
      flex-direction: row;
    `,
  })}
`;

export const Link = styled(Text)`
  text-transform: uppercase;
  transition: 0.2s;
  
  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.yellow}
  }
`;
