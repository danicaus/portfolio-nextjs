import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import FooterStyle from './style';
import theme from '../../themes';

export default function Footer({ social }) {
  const [socialInfo, setSocialInfo] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(undefined);

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
        icon: anchor.dataset.fontawesomeUnicodeIcon,
      }
    ));

    if (window) {
      const isSmallerThanMD = window.matchMedia(`(max-width: ${theme.breakpoints.md}px)`);
      setIsSmallScreen(isSmallerThanMD.matches);

      window.addEventListener('resize', () => {
        setIsSmallScreen(isSmallerThanMD.matches);
      });
    }

    if (socialData) setSocialInfo(socialData);
  }, []);

  return (
    <FooterStyle.Wrapper>
      <FooterStyle.Link
        href="https://github.com/danicaus"
        color="gray100"
        hoverColor="#ffffffb3"
        icon="f09b"
      >
        {isSmallScreen
          ? (
            <FooterStyle.LinkIcon>
              {'\uf09b'}
            </FooterStyle.LinkIcon>
          ) : 'Github' }
      </FooterStyle.Link>
      {socialInfo.map((info) => (
        <FooterStyle.Link
          key={info.name}
          href={info.link}
          color="gray100"
          hoverColor={info.color}
          icon={info.icon}
        >
          {isSmallScreen
            ? (
              <FooterStyle.LinkIcon>
                {String.fromCharCode(`0x${info.icon}`)}
              </FooterStyle.LinkIcon>
            ) : info.name }
        </FooterStyle.Link>
      ))}
    </FooterStyle.Wrapper>
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
