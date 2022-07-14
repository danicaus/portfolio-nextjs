import React from 'react';
import Section from '../../commons/Section';
import ActivityCard from '../../commons/ActivityCard';

const activities = [
  {
    title: 'Personalizando o Windows Terminal',
    description: 'Descrição do conteúdo, com sei lá o que',
    link: [
      {
        url: 'https://dev.to/daniela/como-criei-meu-primeiro-dotfile-para-windows-powershell-1bgi-temp-slug-2707471?preview=a69fdeabc7c882137c49f4dde1c8887ef69884ce6747f6fb3b86e8d36f3d07f85be148b15d7d2b03a8f0716ead2bd3439d237fa0ef4a39392beec498',
        label: 'Leia o post',
      },
    ],
    tags: ['blogpost'],
  },
  {
    title: 'Trilha info',
    description: 'Site idealizado por Flavio Mendes, seguindo a  trilha de conhecimento frontend e backend, com conteúdos de graça',
    link: [
      {
        url: 'trilha.info',
        label: 'Visite o site',
      },
      {
        url: 'https://twitter.com/flaviojmendes',
        label: 'Twitter Flavio Mendes',
      },
    ],
    tags: ['site', 'cursos'],
  },
];

export default function Activities() {
  return (
    <Section id="activities" sectionName="atividades">
      {activities.map((activity) => (
        <ActivityCard activity={activity} />
      ))}
    </Section>
  );
}
