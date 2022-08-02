import styled, { css } from 'styled-components';
import breakpointsMedia from '../../themes/utils/breakpointsMedia';

const ProjectsStyle = styled.div`
  display: grid;

  ${breakpointsMedia({
    xs: css`
      grid-template-columns: 1fr;
      grid-template-rows: repeat(1fr);
      gap: 2rem;
    `,
    md: css`
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      gap: 5rem;
    `,
  })}
`;

export default ProjectsStyle;
