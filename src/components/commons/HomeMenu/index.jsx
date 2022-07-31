import React from 'react';
import { MenuOption, MenuWrapper } from './styles';

export default function HomeMenu() {
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
    <MenuWrapper>
      {menuContent.map((menu) => (
        <MenuOption
          href={menu.link}
          blank="_self"
          color={menu.color}
          ariaLabel={menu.title}
          contentExhibited={menu.title}
          contentHover={menu.hoverTitle}
        />
      ))}
    </MenuWrapper>
  );
}
