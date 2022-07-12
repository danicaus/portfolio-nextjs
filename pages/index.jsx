import React from 'react';
import PropTypes from 'prop-types';

import AboutScreen from '../src/components/Screens/About';
import HomeScreen from '../src/components/Screens/Home';
import ProjectScreen from '../src/components/Screens/ProjectsScreen';

import githubClient from '../src/infra/services/githubClient';
import GET_PINNED_REPOS from '../src/infra/graphql/getPinnedRepos';

export default function Home({ pinnedRepos }) {
  return (
    <>
      <HomeScreen />
      <AboutScreen />
      <ProjectScreen pinnedRepos={pinnedRepos} />
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await githubClient.query({
    query: GET_PINNED_REPOS,
  });

  return {
    props: {
      pinnedRepos: data.user.pinnedItems.nodes,
    },
  };
}

Home.propTypes = {
  pinnedRepos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    createdAt: PropTypes.string,
    stargazerCount: PropTypes.number,
    url: PropTypes.string,
    homepageUrl: PropTypes.string,
  })).isRequired,
};
