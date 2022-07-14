import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Section from '../../commons/Section';
import Text from '../../commons/Text';
import Profile from './style';

export default function AboutScreen({ content }) {
  const [aboutContent, setAboutContent] = useState([]);

  useEffect(() => {
    const $aboutElement = document.createElement('div');
    $aboutElement.innerHTML = content?.text;
    const paragraphsArray = Array.from(
      $aboutElement.querySelectorAll('#portuguese_profile > p'),
    ).map((text) => text.innerText);

    setAboutContent(paragraphsArray);
  }, []);

  // faça um gradiente antes porque tá bem esquisito a transição entre seções!

  return (
    <Section sectionName="sobre mim" id="about">
      <Profile.Wrapper>
        <Profile.Avatar
          src={content?.avatarUrl}
          alt={`Foto de perfil do github ${content?.name}`}
        />
        <Profile.Bio>
          <Text
            as="h2"
            variant="title"
            color="white"
          >
            {content?.name}
          </Text>
          <Text
            as="h3"
            variant="subtitle"
            color="gray300"
          >
            {content?.bio}
          </Text>
          {aboutContent?.map((text) => (
            <Text
              variant="paragraph"
              color="gray300"
            >
              {text}
            </Text>
          ))}
        </Profile.Bio>
      </Profile.Wrapper>
    </Section>
  );
}

AboutScreen.propTypes = {
  content: PropTypes.shape({
    bio: PropTypes.string,
    avatarUrl: PropTypes.string,
    name: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};
