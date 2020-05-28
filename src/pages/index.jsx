import React from 'react';

import { Link } from 'gatsby';
import Layout from '../Layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <Link to="/about">About</Link>
  </Layout>
);

export default IndexPage;
