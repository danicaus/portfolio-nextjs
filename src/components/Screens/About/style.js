import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  margin: 0 5rem;
`;

const Avatar = styled.img`
  height: 5rem;
  width: 5rem;
  border-radius: 5rem;
  margin-bottom: 2rem;
`;

const Bio = styled.div`
  margin-bottom: 2.5rem;

  h3 {
    font-size: 2rem;
    color: var(--white);
  }
  
  h4 {
    font-size: 1.2rem;
    color: var(--gray-300);
  }
`;

const Text = styled.div`
  width: 100%;

  @media screen and (min-width: 720px){
    width: 80%;
  }

  p {
    font-size: 1rem;
    color: var(--gray-300);
    margin-bottom: .5rem;
    line-height: 2;
  }
`;

const Profile = {
  Wrapper,
  Avatar,
  Bio,
  Text,
};

export default Profile;
