import React from 'react';
import MenuStyle from './styles';

export default function CoverMenu() {
  const menuContent = [
    {
      title: 'Oi! 👋🏽',
      hoverTitle: 'Sobre mim',
      link: '#about',
      color: 'green',
    },
    {
      title: 'Eu sou a',
      hoverTitle: 'Projetos',
      link: '#portfolio',
      color: 'pink',
    },
    {
      title: 'Dani Caus',
      hoverTitle: 'Atividades',
      link: '#activities',
      color: 'yellow',
    },
  ];

  return (
    <MenuStyle.Wrapper>
      {menuContent.map((menu) => (
        <MenuStyle.Option
          key={menu.link}
          href={menu.link}
          blank="_self"
          color={menu.color}
          ariaLabel={menu.title}
          contentExhibited={menu.title}
          contentHover={menu.hoverTitle}
        >
          {' '}
        </MenuStyle.Option>
      ))}
    </MenuStyle.Wrapper>
  );
}
