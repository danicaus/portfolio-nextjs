import styled, { css } from 'styled-components';
import breakpointsMedia from '../../themes/utils/breakpointsMedia';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 5rem;
  width: 5rem;
  border-radius: 5rem;
  margin-bottom: 2rem;
`;

const Bio = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  margin-bottom: 2.5rem;

  ${breakpointsMedia({
    xs: css`
      width: 100%;
    `,
    md: css`
      width: 80%;
    `,
  })}
  
`;

const Profile = {
  Wrapper,
  Avatar,
  Bio,
};

export default Profile;
