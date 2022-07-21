import styled from 'styled-components';

const MenuOption = styled.a`
  font-size: clamp(5rem,10vw,10rem);
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
