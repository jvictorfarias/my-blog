import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.nav`
  margin: 2rem auto;
  width: 100%;
`;

export const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
`;

export const SocialLinkItem = styled.li``;

export const SocialLink = styled.a`
  color: #8be9fd;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: ${shade(0.2, '#8be9fd')};
  }
`;

export const IconContainer = styled.div`
  fill: #8be9fd;
  width: 30px;
  height: 30px;
`;
