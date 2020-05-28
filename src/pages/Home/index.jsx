import React from 'react';

import Layout from '../../Layout';
import SEO from '../../components/seo';
import PostItem from '../../components/PostItem';

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about"
      category="js"
      date="30 de abril de 2020"
      timeToRead="4"
      title="Reagindo ao react"
      description="Um curso que introduz de forma breve os benefícios do react"
    />
    <PostItem
      slug="/about"
      category="js"
      date="30 de abril de 2020"
      timeToRead="4"
      title="Reagindo ao react"
      description="Um curso que introduz de forma breve os benefícios do react"
    />
  </Layout>
);

export default Home;
