import React from 'react'

import { StaticQuery, graphql } from 'gatsby'

const Profile = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={({
      site: {
        siteMetadata: { title, position, author, description },
      },
    }) => (
      <div>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <span>{position}</span>
        <p>{description}</p>
      </div>
    )}
  />
)

export default Profile
