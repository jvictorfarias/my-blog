const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');

// To add slug on each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  // Ensures we are processing only markdown files
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages',
    });

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: 'slug',
      value: `/${slug.slice(12)}`,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    query PostMetadata {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges;
    posts.forEach(
      ({
        node: {
          fields: { slug },
        },
      }) => {
        createPage({
          path: slug,
          component: path.resolve('./src/templates/blog-post.jsx'),
          context: {
            slug,
          },
        });
      },
    );

    // Creating pagination
    const postsPerPage = 6;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/` : `/page/${index + 1}`,
        component: path.resolve('./src/templates/blog-list.jsx'),
        context: {
          limit: postsPerPage,
          skip: postsPerPage * index,
          numPages,
          currentPage: index + 1,
        },
      });
    });
  });
};
