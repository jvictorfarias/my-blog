import styled from 'styled-components';
import { Link } from 'gatsby';
import { lighten } from 'polished';

export const Container = styled.div`
  border-bottom: 1px solid #8be9fd;
  border-top: 1px solid #8be9fd;
  background: #44475a;
  display: flex;
  justify-content: space-between;
`;

export const RecommendedLink = styled(Link)`
  align-items: center;
  background: #282a36;
  color: #f8f8f2;
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;

  &:hover {
    background: ${lighten(0.08, '#282a36')};
  }

  &.previous {
    border-right: 1px solid #8be9fd;
    justify-content: flex-start;
    svg {
      margin-right: 0.3rem;
    }
  }

  &.next {
    justify-content: flex-end;
    margin-right: 0.3rem;

    svg {
      margin-left: 0.3rem;
    }
  }
`;
