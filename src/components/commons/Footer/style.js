import styled from 'styled-components';
import Text from '../Text';

// eslint-disable-next-line import/prefer-default-export
export const FooterWrapper = styled.footer`
  display: flex;
  gap: 5rem;
  align-items: center;
  justify-content: center;
  padding: 1rem 2vw;
`;

export const FooterLink = styled(Text)`
  &:hover {
    color: ${({ hoverColor }) => hoverColor};
  }
`;
