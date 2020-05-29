import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import Avatar from '../Avatar';

import {
  Container,
  ProfileLink,
  ProfileAuthor,
  ProfilePosition,
  ProfileDescription,
} from './styles';

const Profile = () => {
  const {
    site: {
      siteMetadata: { position, author, description },
    },
  } = useStaticQuery(graphql`
    query ProfileMetadata {
      site {
        siteMetadata {
          description
          author
          position
        }
      }
    }
  `);

  return (
    <Container>
      <ProfileLink to="/about">
        <Avatar />
        <ProfileAuthor>
          {author}
          <ProfilePosition>{position}</ProfilePosition>
        </ProfileAuthor>
        <ProfileDescription>{description}</ProfileDescription>
      </ProfileLink>
    </Container>
  );
};

export default Profile;
