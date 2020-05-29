import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  border-top: 1px solid #8be9fd;
  color: #f8f8f2;
  padding: 1.5rem 3rem;
  justify-content: space-around;

  a {
    display: flex;
    align-items: center;
    color: #f8f8f2;
    text-decoration: none;
    transition: color 0.5s;

    svg {
      margin: 0.4rem;
    }

    &:hover {
      color: #ff79c6;
    }
  }
`;
