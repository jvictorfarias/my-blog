import React from 'react';

import PropTypes from 'prop-types';

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import { Container, RecommendedLink } from './styles';

const RecommendedPosts = ({ nextPost, previousPost }) => (
  <Container>
    {previousPost && (
      <RecommendedLink to={previousPost.fields.slug} className="previous">
        <FiArrowLeft size={20} />
        {previousPost.frontmatter.title}
      </RecommendedLink>
    )}
    {nextPost && (
      <RecommendedLink to={nextPost.fields.slug} className="next">
        {nextPost.frontmatter.title}
        <FiArrowRight size={20} />
      </RecommendedLink>
    )}
  </Container>
);

export default RecommendedPosts;

RecommendedPosts.propTypes = {
  nextPost: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
  previousPost: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
};

RecommendedPosts.defaultProps = {
  nextPost: null,
  previousPost: null,
};
