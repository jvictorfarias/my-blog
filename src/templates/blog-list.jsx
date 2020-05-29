import React from 'react';

import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';

const BlogList = ({ data }) => {
  const postList = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(
        ({
          node: {
            frontmatter: { background, category, date, title, description },
            timeToRead,
            fields: { slug },
          },
        }) => (
          <PostItem
            key={title}
            slug={slug}
            category={category}
            background={background}
            date={date}
            title={title}
            description={description}
            timeToRead={timeToRead.toString()}
          />
        ),
      )}
    </Layout>
  );
};

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            category
            background
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
          }
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default BlogList;

BlogList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object.isRequired,
    html: PropTypes.string.isRequired,
  }).isRequired,
};
