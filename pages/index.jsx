import React from 'react';
import PropTypes from 'prop-types';

import AboutScreen from '../src/components/Screens/About';
import HomeScreen from '../src/components/Screens/Home';
import ProjectScreen from '../src/components/Screens/ProjectsScreen';

import githubClient from '../src/infra/services/githubClient';
import GET_GITHUB_BIO_AND_PINNED_REPOS from '../src/infra/graphql/getGithubBioAndPinnedRepos';
import Activities from '../src/components/Screens/Activities';
import Footer from '../src/components/commons/Footer';

export default function Home({ pinnedRepos, aboutText }) {
  return (
    <>
      <HomeScreen />
      <AboutScreen content={aboutText} />
      <ProjectScreen pinnedRepos={pinnedRepos} />
      <Activities />
      <Footer social={aboutText} />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await githubClient.query({
    query: GET_GITHUB_BIO_AND_PINNED_REPOS,
  });

  const { text } = data.user.repository.object;
  const { bio, avatarUrl, name } = data.user;

  const pinnedRepos = data.user.pinnedItems.nodes;

  const aboutText = {
    bio,
    avatarUrl,
    name,
    text,
  };

  return {
    props: {
      pinnedRepos,
      aboutText,
    },
    revalidate: 3600,
  };
}

Home.propTypes = {
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
  aboutText: PropTypes.shape({
    bio: PropTypes.string,
    avatarUrl: PropTypes.string,
    name: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

Home.defaultProps = {
  pinnedRepos: {
    homepageUrl: '',
    object: {
      text: '',
    },
  },
};
