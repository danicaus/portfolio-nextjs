import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../commons/Section';
import ProjectCard from '../../commons/ProjectCard';

import ProjectsStyle from './style';

export default function ProjectScreen({ pinnedRepos }) {
  return (
    <Section sectionName="projetos" id="portfolio" color="green">
      <ProjectsStyle>
        {pinnedRepos.map((repo) => (
          <ProjectCard repo={repo} key={repo.url} />
        ))}
      </ProjectsStyle>
    </Section>
  );
}

ProjectScreen.propTypes = {
  pinnedRepos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    pushedAt: PropTypes.string.isRequired,
    stargazerCount: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    homepageUrl: PropTypes.string,
    object: PropTypes.shape({
      text: PropTypes.string,
    }),
  })),
};

ProjectScreen.defaultProps = {
  pinnedRepos: {
    homepageUrl: '',
    object: {
      text: '',
    },
  },
};
