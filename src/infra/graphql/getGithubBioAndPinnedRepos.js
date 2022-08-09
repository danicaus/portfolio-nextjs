import { gql } from '@apollo/client';

const GET_GITHUB_BIO_AND_PINNED_REPOS = gql`
  query myBioAndPinnedRepos { 
    user(login:"danicaus") {
      bio
      avatarUrl
      name
      repository(name: "danicaus") {
        object(expression: "main:README.md") {
          ... on Blob {
            text
          }
        }
      }
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

export default GET_GITHUB_BIO_AND_PINNED_REPOS;
