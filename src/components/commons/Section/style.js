import styled, { css } from 'styled-components';
import breakpointsMedia from '../../themes/utils/breakpointsMedia';

const SectionWrapper = styled.section`
  ${breakpointsMedia({
    xs: css`
      padding: 1.5rem 2rem;
    `,
    md: css`
      padding: 3rem;
    `,
  })}
`;

const SectionContent = styled.div`
  ${breakpointsMedia({
    xs: css`
      padding: 1rem 0;
    `,
    md: css`
      padding: 3rem 10rem;
    `,
  })}
`;

export {
  SectionWrapper,
  SectionContent,
};
