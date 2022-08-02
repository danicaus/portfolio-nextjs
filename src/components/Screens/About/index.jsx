import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Section from '../../commons/Section';
import Text from '../../commons/Text';

import AboutStyle from './style';

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

  return (
    <Section sectionName="sobre mim" id="about">
      <AboutStyle>
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
            key={text}
            variant="paragraph"
            color="gray300"
          >
            {text}
          </Text>
        ))}
      </AboutStyle>
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
