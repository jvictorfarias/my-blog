import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

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
  )

  return (
    <Img
      fluid={avatarImage.childImageSharp.fluid}
      style={{ width: 60, height: 60 }}
    />
  )
}

export default Avatar
