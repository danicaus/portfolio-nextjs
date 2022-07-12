import { gql } from '@apollo/client';

const GET_PINNED_REPOS = gql`
  query myPinnedRepos { 
    user(login:"danicaus") {
      pinnedItems(first: 6, types: [REPOSITORY]) {
        nodes {
          ... on Repository {
            pushedAt
            stargazerCount
            url
            name
            description
            homepageUrl
            object(expression: "main:README.md") {
            ... on Blob {
              text
            }
          }
          }
        }
      }
    }
  }
`;

export default GET_PINNED_REPOS;
