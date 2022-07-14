import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BsClockHistory, BsStar, BsGithub } from 'react-icons/bs';
import Image from 'next/image';

import handleDateFormat from '../utils/getRelativeTime';

import {
  Project,
  ProjectInfo,
  ProjectContent,
  ProjectButton,
} from './style';
import Text from '../Text';

export default function ProjectCard({ repo }) {
  const [hasLogo, setHasLogo] = useState(false);
  const [repoName, setRepoName] = useState(repo.name);
  const nextLoader = ({ src, width, quality }) => `https://raw.githubusercontent.com/danicaus/${src}?w=${width}&q=${quality || 75}`;

  function capitalizeFirstName(name) {
    return name.replaceAll('-', ' ').split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
  }

  useEffect(() => {
    const $readmeElement = document.createElement('div');
    $readmeElement.innerHTML = repo?.object?.text;
    const $titleElement = $readmeElement.querySelector('h1');

    // Dentro do h1, temos uma img do md: ![](). Abaixo estou pegando só a referência do logo.
    const logoRef = $titleElement?.innerText?.split('(')[1].replace(')', '');

    if (logoRef) {
      setHasLogo(true);
      setRepoName(logoRef);
    } else {
      setRepoName(capitalizeFirstName(repo.name));
    }
  }, []);

  return (
    <Project>
      <ProjectInfo>
        <small>
          <Text
            variant="smallestException"
            color="gray300"
            tag="span"
          >
            <BsClockHistory />
            {handleDateFormat(repo.pushedAt)}
          </Text>
          <Text
            variant="smallestException"
            color="gray300"
            tag="span"
          >
            <BsStar />
            {repo.stargazerCount}
          </Text>
        </small>
        <a href={repo.url}>
          <Text
            variant="smallestException"
            color="gray300"
            tag="span"
          >
            <BsGithub />
          </Text>
        </a>
      </ProjectInfo>
      <ProjectContent>
        <div>
          {hasLogo
            ? (
              <ProjectContent.LogoContainer>
                <Image src={`${repo.name}/main/${repoName}`} loader={nextLoader} alt={capitalizeFirstName(repo.name)} height={20} width={200} layout="fill" objectFit="contain" objectPosition="left" />
              </ProjectContent.LogoContainer>
            ) : (
              <Text
                tag="h3"
                variant="subtitle"
                color="green"
              >
                {repoName}
              </Text>
            )}
          <Text
            variant="paragraph"
            color="gray300"
          >
            {repo.description}
          </Text>
        </div>
        {repo.homepageUrl && (
          <ProjectButton
            href={repo.homepageUrl}
            target="_blank"
          >
            <Text
              variant="paragraph"
              color="black"
            >
              Ver página
            </Text>
          </ProjectButton>
        )}
      </ProjectContent>
    </Project>
  );
}

ProjectCard.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    pushedAt: PropTypes.string.isRequired,
    stargazerCount: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    homepageUrl: PropTypes.string.isRequired,
    object: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
