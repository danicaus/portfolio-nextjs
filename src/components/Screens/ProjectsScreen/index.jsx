import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../commons/Section';
import ProjectCard from '../../commons/ProjectCard';

import ProjectsWrapper from './style';

export default function ProjectScreen({ pinnedRepos }) {
  return (
    <Section sectionName="projetos" id="portfolio">
      <ProjectsWrapper>
        {pinnedRepos.map((repo) => (
          <ProjectCard repo={repo} key={repo.url} />
        ))}
      </ProjectsWrapper>
    </Section>
  );
}

ProjectScreen.propTypes = {
  pinnedRepos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    pushedAt: PropTypes.string.isRequired,
    stargazerCount: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    homepageUrl: PropTypes.string.isRequired,
  })).isRequired,
};
