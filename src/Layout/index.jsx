import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../components/Sidebar';

import GlobalStyles from '../styles/global';

import { Container, Main } from './styles';
import MenuBar from '../components/MenuBar';

const Layout = ({ children }) => {
  return (
    <Container>
      <GlobalStyles />
      <Sidebar />
      <Main>{children}</Main>
      <MenuBar />
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
