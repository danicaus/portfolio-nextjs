import styled, { css } from 'styled-components';
import breakpointsMedia from '../../themes/utils/breakpointsMedia';
import Text from '../Text';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray700};
  border-radius: 0.5rem;
  ${breakpointsMedia({
    xs: css`
      padding: 3rem 2rem;
      `,
    md: css`
      padding: 3rem 4rem;
    `,
  })}
`;

const Header = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderData = styled(Text)`
  display: flex;
  gap: 1.2rem;
  align-items: baseline;

  svg:nth-child(2) {
    margin-left: 1rem;
  }
`;

const Main = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  h3, & > div > p {
    margin-bottom: 2rem;
  }
`;

const TitleLogo = styled(Text)`
  position: relative;
  ${breakpointsMedia({
    xs: css`
      height: 3.5rem;
      `,
    md: css`
      height: 4rem;
    `,
  })}
`;

const Button = styled.a`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: .5rem;
  color: ${({ theme }) => theme.colors.black};
  padding: .5rem;
  text-align: center;
  transition: .2s filter;

  &:hover {
    filter: brightness(0.8);
  }

  &:focus {
    outline: solid .3rem;
    outline-color: ${({ theme }) => `${theme.colors.green}a0`};
    outline-offset: 0;
  }

  &:focus-visible {
    outline: solid .3rem;
    outline-color: ${({ theme }) => `${theme.colors.white}`};
    outline-offset: 0;
  }
`;

export default {
  Wrapper,
  Header,
  HeaderData,
  Main,
  TitleLogo,
  Button,
};
