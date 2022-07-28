import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { FooterWrapper, FooterLink } from './style';

export default function Footer({ social }) {
  const [socialInfo, setSocialInfo] = useState([]);

  if (!social) return '';

  useEffect(() => {
    const $readmeElement = document.createElement('div');
    $readmeElement.innerHTML = social?.text;

    const $socialElement = $readmeElement.querySelector('#social');
    const anchorElementsArray = Array.from($socialElement.querySelectorAll('a'));

    const socialData = anchorElementsArray.map((anchor) => (
      {
        link: anchor.href,
        name: anchor.dataset.description,
        color: anchor.dataset.color,
        icon: anchor.dataset.reactIcon,
      }
    ));

    if (socialData) setSocialInfo(socialData);
  }, []);

  return (
    <FooterWrapper>
      {socialInfo.map((info) => (
        <FooterLink
          key={info.name}
          href={info.link}
          color="gray100"
          hoverColor={info.color}
        >
          {info.name}
        </FooterLink>
      ))}
    </FooterWrapper>
  );
}

Footer.propTypes = {
  social: PropTypes.shape({
    bio: PropTypes.string,
    avatarUrl: PropTypes.string,
    name: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};
