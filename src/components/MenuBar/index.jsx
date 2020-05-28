import React from 'react';

import { FiHome, FiSearch, FiSun, FiArrowUp, FiGrid } from 'react-icons/fi';
import { Container, MenuBarGroup, MenuBarItem, MenuBarLink } from './styles';

const MenuBar = () => (
  <Container>
    <MenuBarGroup>
      <MenuBarLink to="/" title="Voltar para Home">
        <MenuBarItem>
          <FiHome size={24} />
        </MenuBarItem>
      </MenuBarLink>
      <MenuBarLink to="/search" title="Pesquisar">
        <MenuBarItem>
          <FiSearch size={24} />
        </MenuBarItem>
      </MenuBarLink>
    </MenuBarGroup>
    <MenuBarGroup>
      <MenuBarItem title="Mudar o tema">
        <FiSun size={24} />
      </MenuBarItem>
      <MenuBarItem title="Mudar visualização">
        <FiGrid size={24} />
      </MenuBarItem>
      <MenuBarItem title="Voltar para o topo">
        <FiArrowUp size={24} />
      </MenuBarItem>
    </MenuBarGroup>
  </Container>
);

export default MenuBar;
