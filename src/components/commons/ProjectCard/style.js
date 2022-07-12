import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
const Project = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray700};
  border-radius: 1rem;
  padding: 2rem;
`;

const ProjectInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  small {
    display: flex;
    gap: 1.2rem;
    align-items: center;

    span {
      display: flex;
      gap: .3rem;
      align-items: center;
    }
  }

  a {
    display: flex;
    align-items: center;
  }
`;

const ProjectButton = styled.a`
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

const ProjectContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  h3, & > div > p {
    margin-bottom: 1rem;
  }
`;

ProjectContent.LogoContainer = styled.div`
  height: 2rem;
  width: 100%;
  position: relative;
  margin-bottom: 1rem;
`;

export {
  Project,
  ProjectInfo,
  ProjectContent,
  ProjectButton,
};
