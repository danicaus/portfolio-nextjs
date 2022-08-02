import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BsClockHistory, BsStar, BsGithub } from 'react-icons/bs';
import Image from 'next/image';

import handleDateFormat from '../utils/getRelativeTime';

import ProjectStyle from './style';
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

    const titleContent = $titleElement?.innerText;
    const hasImage = titleContent?.trim().startsWith('!');
    const logoRef = hasImage ? titleContent?.split('(')[1].replace(')', '') : '';

    if (hasImage) {
      setHasLogo(true);
      setRepoName(logoRef);
    } else {
      const title = $titleElement ? titleContent : capitalizeFirstName(repo.name);
      setRepoName(title);
    }
  }, []);

  return (
    <ProjectStyle.Wrapper>
      <ProjectStyle.Header>
        <ProjectStyle.HeaderData
          variant="smallestException"
          color="gray300"
          tag="span"
        >
          <BsClockHistory />
          {handleDateFormat(repo.pushedAt)}

          <BsStar />
          {repo.stargazerCount}
        </ProjectStyle.HeaderData>
        <Text
          variant="smallestException"
          href={repo.url}
          color="gray300"
          tag="span"
        >
          <BsGithub />
        </Text>
      </ProjectStyle.Header>
      <ProjectStyle.Main>
        <div>
          {hasLogo
            ? (
              <ProjectStyle.TitleLogo
                tag="h3"
                variant="title"
                color="pink"
              >
                <Image src={`${repo.name}/main/${repoName}`} loader={nextLoader} alt={capitalizeFirstName(repo.name)} layout="fill" objectFit="contain" objectPosition="left" />
              </ProjectStyle.TitleLogo>
            ) : (
              <Text
                tag="h3"
                variant="title"
                color="pink"
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
          <ProjectStyle.Button
            href={repo.homepageUrl}
            target="_blank"
          >
            <Text
              variant="paragraph"
              color="black"
            >
              Ver página
            </Text>
          </ProjectStyle.Button>
        )}
      </ProjectStyle.Main>
    </ProjectStyle.Wrapper>
  );
}

ProjectCard.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    pushedAt: PropTypes.string.isRequired,
    stargazerCount: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    homepageUrl: PropTypes.string,
    object: PropTypes.shape({
      text: PropTypes.string,
    }),
  }),
};

ProjectCard.defaultProps = {
  repo: {
    homepageUrl: '',
    object: {
      text: '',
    },
  },
};
