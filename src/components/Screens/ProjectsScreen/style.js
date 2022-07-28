import styled, { css } from 'styled-components';
import breakpointsMedia from '../../themes/utils/breakpointsMedia';

const ProjectsWrapper = styled.div`
  display: grid;

  ${breakpointsMedia({
    xs: css`
      grid-template-columns: 1fr;
      grid-template-rows: repeat(1fr);
      gap: 1rem;
    `,
    md: css`
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      gap: 3rem;
    `,
  })}
`;

export default ProjectsWrapper;
