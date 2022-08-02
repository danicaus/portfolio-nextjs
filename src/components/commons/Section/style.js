import styled, { css } from 'styled-components';
import breakpointsMedia from '../../themes/utils/breakpointsMedia';
import Text from '../Text';

const Wrapper = styled.section`
  ${breakpointsMedia({
    xs: css`
      padding: 1.5rem 2rem;
    `,
    md: css`
      padding: 3rem 18rem;
    `,
  })}
`;

const Content = styled.div`
  ${breakpointsMedia({
    xs: css`
      padding: 3rem 0 1rem;
    `,
    md: css`
      padding: 8rem 12rem;
    `,
  })}
`;

const Name = styled(Text)`
  font-weight: 400;

  &::before {
    content: '${({ closeTag }) => (closeTag ? '</' : '<')}';
  }

  &::after {
    content: '>';
  }
`;

export default {
  Wrapper,
  Name,
  Content,
};
