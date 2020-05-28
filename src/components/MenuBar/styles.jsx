import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #282a36;
  border-left: 1px solid #8be9fd;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuBarLink = styled(Link)`
  display: block;
`;

export const MenuBarItem = styled.span`
  color: #8be9fd;
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
`;
