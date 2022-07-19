import styled from 'styled-components';

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

  a {
    text-transform: uppercase;
    transition: 0.2s;
    
    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.yellow}
    }  
  }
`;
