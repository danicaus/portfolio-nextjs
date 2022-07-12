import React, { useState, useEffect } from 'react';
import Section from '../../commons/Section';
import Text from '../../commons/Text';
import Profile from './style';

export default function AboutScreen() {
  const [aboutContent, setAboutContent] = useState(null);
  const [profileInfo, setProfileInfo] = useState({
    name: '',
    bio: '',
    avatar: '',
  });

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_README_FILE)
      .then((res) => res.text())
      .then((resText) => {
        const $aboutElement = document.createElement('div');
        $aboutElement.innerHTML = resText;
        const paragraphsArray = Array.from(
          $aboutElement.querySelectorAll('#portuguese_profile > p'),
        ).map((text) => text.innerText);
        return paragraphsArray;
      })
      .then((content) => setAboutContent(content));

    fetch(process.env.NEXT_PUBLIC_PROFILE)
      .then((res) => res.json())
      .then((resJson) => setProfileInfo({
        name: resJson.name,
        bio: resJson.bio,
        avatar: resJson.avatar_url,
      }));
  }, []);
  // faça um gradiente antes porque tá bem esquisito a transição entre seções!

  return (
    <Section sectionName="sobre mim" id="about">
      <Profile.Wrapper>
        <Profile.Avatar
          src={profileInfo.avatar}
          alt={`Foto de perfil do github ${profileInfo.name}`}
        />
        <Profile.Bio>
          <Text
            as="h2"
            variant="title"
            color="white"
          >
            {profileInfo.name}
          </Text>
          <Text
            as="h3"
            variant="subtitle"
            color="gray300"
          >
            {profileInfo.bio}
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
