import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.div``;

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`;

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: #50fa7b;
  }
`;

export const MenuLink = styled(Link)`
  color: #f8f8f2;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #50fa7b;
  }
`;
