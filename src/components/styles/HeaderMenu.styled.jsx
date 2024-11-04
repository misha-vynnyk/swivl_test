import styled from "styled-components";

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.h3`
  margin: 0;
  margin-right: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.3rem;
  letter-spacing: -0.5px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 0.8rem;
    margin: 0 1rem;
    line-height: 0.8rem;
  }
`;

export const UserAvatar = styled.img`
 width: 2rem;
 margin-right: 1rem;

 @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-right: 0.5rem;
  }
`;

export const MenuOpener = styled.img`
  width: 1rem;
  margin-right: 1.5rem;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.backgroundText};
    border-radius: 50%;
  }
`;
