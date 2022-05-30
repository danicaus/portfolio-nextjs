import styled from 'styled-components';

const MenuOption = styled.a`
  font-size: clamp(4rem, 8vw, 6rem);
  font-weight: 900;
  color: var(--pink);
  font-family: 'Poppins', sans-serif;
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
  top: 20%;
  left: 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export {
  MenuOption,
  HomeMenuWrapper,
};
