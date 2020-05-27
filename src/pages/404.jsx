import React from 'react'

import Layout from '../Layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Not Found</h1>
    <p>Ops... cannot read property lenght of undefined.</p>
  </Layout>
)

export default NotFoundPage
