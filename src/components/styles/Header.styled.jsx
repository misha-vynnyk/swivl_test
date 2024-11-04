import styled from "styled-components";

export const StyledHeader = styled.header`
  padding-top: 2rem;
  margin-bottom: 4.5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.header};

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-bottom: 2rem;
    padding-top: 1rem;
  }
`;

export const TabNavigation = styled.nav`
  max-width: ${({ theme }) => theme.desktop};
  display: flex;
  gap: 2rem;
  padding-bottom: 1.5rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    gap: 1rem;
    padding-bottom: 1rem;
  }

  a {
    position: relative;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary};
    opacity: 0.6;
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.3rem;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;

    &:hover,
    &:focus {
      opacity: 1;
    }

    &.active {
      opacity: 1;

      &::after {
        content: "";
        display: block;
        position: absolute;
        border-radius: 0.1rem;
        width: 100%;
        height: 0.3rem;
        bottom: -1.5rem;
        background: linear-gradient(
          135deg,
          rgb(255, 151, 79) -48.635%,
          rgb(227, 44, 117) 51.365%
        );
        transition: all 0.3s ease-in-out;
      }
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 0.8rem;
    }
  }
`;
