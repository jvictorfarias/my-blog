import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { ImageContainer } from './styles';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query ProfileImage {
        avatarImage: file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 60, maxHeight: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `,
  );

  return (
    <ImageContainer
      fluid={avatarImage.childImageSharp.fluid}
      style={{ width: 60, height: 60 }}
    />
  );
};

export default Avatar;
