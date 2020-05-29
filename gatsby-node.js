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
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(
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
  });
};
