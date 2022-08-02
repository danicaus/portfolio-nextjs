import styled, { css } from 'styled-components';
import breakpointsMedia from '../../themes/utils/breakpointsMedia';
import Text from '../Text';

const Wrapper = styled.h1`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  ${breakpointsMedia({
    xs: css`
      left: 5%;
      top: 8%;
    `,
    md: css`
      left: 12%;
      top: 18%;
    `,
  })}
`;

const Option = styled(Text)`
  font-size: clamp(6rem,10vw,16rem);
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  transition: ease-in-out .3s;

  &::after {
    content: '${({ contentExhibited }) => contentExhibited}';
  }

  &:hover::after {
    content: '${({ contentHover }) => contentHover}';
  }

  &:hover {
    transform: translateX(5rem);
  }
`;

export default {
  Option,
  Wrapper,
};
