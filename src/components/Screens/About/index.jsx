import React, { useState, useEffect } from 'react';
import SectionTitle from '../../commons/SectionTitle';
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
    <>
      <SectionTitle sectionName="sobre" />
      <Profile.Wrapper>
        <Profile.Avatar
          src={profileInfo.avatar}
          alt={`Foto de perfil do github ${profileInfo.name}`}
        />
        <Profile.Bio>
          <h3>{profileInfo.name}</h3>
          <h4>{profileInfo.bio}</h4>
        </Profile.Bio>
        <Profile.Text>
          {aboutContent?.map((text) => (
            <p>{text}</p>
          ))}
        </Profile.Text>
      </Profile.Wrapper>
      <SectionTitle sectionName="sobre" isCloseTag="true" />
    </>
  );
}
