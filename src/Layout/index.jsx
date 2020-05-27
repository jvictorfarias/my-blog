import React from 'react'
import PropTypes from 'prop-types'
import Profile from '../components/Profile'

import GlobalStyles from '../styles/global'

import { Container, Main } from './styles'

const Layout = ({ children }) => {
  return (
    <Container>
      <GlobalStyles />
      <Profile />
      <Main>{children}</Main>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
