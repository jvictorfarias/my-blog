import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { ImageContainer } from './styles';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query ProfileImage {
        avatarImage: file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `,
  );

  return <ImageContainer fixed={avatarImage.childImageSharp.fixed} />;
};

export default Avatar;
