import Link from 'next/link';
import React from 'react';
import { MenuOption, HomeMenuWrapper } from './styles';

export default function HomeMenu() {
  const menuContent = [
    {
      title: 'Olá.',
      hoverTitle: 'Sobre mim',
      link: '#about',
    },
    {
      title: 'Eu sou a',
      hoverTitle: 'Projetos',
      link: '#portfolio',
    },
    {
      title: 'Dani',
      hoverTitle: 'Atividades',
      link: '#activities',
    },
  ];

  return (
    <HomeMenuWrapper>
      {
        menuContent.map((content) => (
          <Link passHref href={content.link} key={content.link}>
            <MenuOption
              ariaLabel={content.title}
              contentExhibited={content.title}
              contentHover={content.hoverTitle}
            />
          </Link>
        ))
      }
    </HomeMenuWrapper>
  );
}
