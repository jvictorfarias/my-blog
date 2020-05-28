import React from 'react';

import Profile from '../Profile';

import { Container } from './styles';
import SocialLinks from '../SocialLinks';
import MenuLinks from '../MenuLinks';

const Sidebar = () => (
  <Container>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </Container>
);

export default Sidebar;
