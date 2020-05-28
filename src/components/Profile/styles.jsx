import styled from 'styled-components';
import { shade } from 'polished';
import { Link } from 'gatsby';

export const Container = styled.section`
  color: #f8f8f2;
  display: flex;
  flex-direction: column;
`;

export const ProfileLink = styled(Link)`
  color: #f8f8f2;
  text-decoration: none;
  transition: color 0.5s;

  &hover {
    color: ${shade(0.2, '#f8f8f2')};
  }
`;

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem;
`;

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
`;

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
`;
