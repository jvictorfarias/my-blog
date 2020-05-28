import React from 'react';

import Profile from '../Profile';

import { Container } from './styles';
import SocialLinks from '../SocialLinks';

const Sidebar = () => (
  <Container>
    <Profile />
    <SocialLinks />
  </Container>
);

export default Sidebar;
