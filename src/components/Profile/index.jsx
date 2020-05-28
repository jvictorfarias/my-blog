import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import Avatar from '../Avatar';

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, author, description },
    },
  } = useStaticQuery(graphql`
    query ProfileMetadata {
      site {
        siteMetadata {
          title
          description
          author
          position
        }
      }
    }
  `);

  return (
    <div>
      <Avatar />
      <h1>{title}</h1>
      <h2>{author}</h2>
      <span>{position}</span>
      <p>{description}</p>
    </div>
  );
};

export default Profile;
