import styled from "styled-components";

export const HeaderAction = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    list-style: none;
    &:hover {
      background-color: ${({ theme }) => theme.colors.backgroundText};
      border-radius: 50%;
    }
  }


  a {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      height: 1rem;
      width: 1rem;
    }
  }
  img {
    height: 100%;
    width: 100%;
  }
`;
