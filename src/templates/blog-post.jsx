import React from 'react';

import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../Layout';
import SEO from '../components/seo';

import {
  PostHeader,
  PostTitle,
  PostDescription,
  PostDate,
  MainContent,
} from '../components/Post/styles';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <PostHeader>
        <PostDate>
          {post.frontmatter.date} • {post.timeToRead} min de leitura
        </PostDate>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostDescription>{post.frontmatter.description}</PostDescription>
      </PostHeader>
      <MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </MainContent>
    </Layout>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      html
      timeToRead
    }
  }
`;

export default BlogPost;

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired,
  }).isRequired,
};
