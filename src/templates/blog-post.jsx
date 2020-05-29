import React from 'react';

import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

export default BlogPost;

BlogPost.propTypes = {
  data: PropTypes.object.shape({
    markdownRemark: PropTypes.object.isRequired,
    html: PropTypes.string.isRequired,
  }).isRequired,
};
