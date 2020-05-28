import styled from 'styled-components';
import { Link } from 'gatsby';
import { shade } from 'polished';

export const Container = styled(Link)`
  color: #ff79c6;
  display: flex;
  text-decoration: none;
  transition: color 0.5s;
  flex-direction: column;

  &:hover {
    color: ${shade(0.2, '#ff79c6')};
  }
`;

export const PostItemContainer = styled.section`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #8be9fd;
  padding: 2rem 3rem;
  width: 100%;
`;

export const PostItemTag = styled.div`
  display: flex;
  align-items: center;
  background: ${props => props.background};
  border-radius: 50%;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;
  margin-left: 3rem;
`;

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`;

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`;

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`;

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`;
