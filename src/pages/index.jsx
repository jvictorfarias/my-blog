import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostMetadata {
      allMarkdownRemark {
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
          }
        }
      }
    }
  `);

  const postList = allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(
        ({
          node: {
            frontmatter: { background, category, date, title, description },
            timeToRead,
          },
        }) => (
          <PostItem
            key={title}
            slug="/about"
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

export default IndexPage;
