import React from 'react';

import { Container, MenuLinksList, MenuLinksItem, MenuLink } from './styles';

const MenuLinks = () => {
  const links = [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Sobre mim',
      url: '/about',
    },
  ];
  return (
    <Container>
      <MenuLinksList>
        {links.map(link => (
          <MenuLinksItem key={link.label}>
            <MenuLink activeClassName="active" to={link.url}>
              {link.label}
            </MenuLink>
          </MenuLinksItem>
        ))}
      </MenuLinksList>
    </Container>
  );
};

export default MenuLinks;
