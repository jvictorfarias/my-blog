import React from 'react';

import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';
import Pagination from '../components/Pagination';

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

const BlogList = ({ data, pageContext }) => {
  const postList = data.allMarkdownRemark.edges;
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;

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
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  );
};

export default BlogList;

BlogList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object.isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
  }).isRequired,
};
