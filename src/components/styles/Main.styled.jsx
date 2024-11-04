import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  position: relative;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 10rem;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    justify-content: center;
    gap: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0;
  }
`;

export const ActionButton = styled.button`
  position: absolute;
  background-image: url(./public/icons/action_button.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;

  top: -6.28rem;
  right: 0;

  transform: translate(0, 0);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    top: -3.8rem;
  }
`;
