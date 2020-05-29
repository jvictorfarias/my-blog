import React from 'react';

import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../Layout';
import SEO from '../components/seo';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
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
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired,
    html: PropTypes.string.isRequired,
  }).isRequired,
};
