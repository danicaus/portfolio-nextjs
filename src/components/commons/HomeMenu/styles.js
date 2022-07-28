import styled, { css } from 'styled-components';
import breakpointsMedia from '../../themes/utils/breakpointsMedia';

const MenuOption = styled.a`
  font-size: clamp(6rem,10vw,12rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.pink};
  font-family: 'Montserrat', sans-serif;
  transition: ease-in-out .3s;

  &::after {
    content: '${({ contentExhibited }) => contentExhibited}';
  }

  &:hover::after {
    content: '${({ contentHover }) => contentHover}';
  }

  &:hover {
    transform: translateX(2rem);
  }
`;

const HomeMenuWrapper = styled.div`
  position: absolute;
  left: 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  ${breakpointsMedia({
    xs: css`
      top: 10%;
    `,
    md: css`
      top: 20%;
    `,
  })}
`;

export {
  MenuOption,
  HomeMenuWrapper,
};
