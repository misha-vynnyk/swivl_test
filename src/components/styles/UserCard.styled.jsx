import styled from "styled-components";

export const UserCard = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-bottom: 3rem;
  padding: 1rem;
  max-width: 23rem;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    min-width: 10rem;
    max-width: 23rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 30rem;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.8rem;
  }
`;

export const UserPhoto = styled.img`
  box-sizing: border-box;
  width: 7.5rem;
  height: 7.5rem;
  margin-right: 2rem;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 5rem;
    height: 5rem;
  }
`;

export const UserInfo = styled.div`
  margin-right: 1.5rem;
  margin-bottom: 3rem;
  h2 {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.8rem;

    @media (max-width: ${({ theme }) => theme.tablet}) {
      font-size: 1rem;
    }
  }

  p {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: -0.5px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1rem;
  height: 1.8rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.3);
  }
`;

export const ReportMenu = styled.div`
  display: flex;
  position: absolute;
  top: 3rem;
  right: -9rem;
  width: 11rem;
  height: 8rem;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  backdrop-filter: blur(21.75px);
  background: ${({ theme }) => theme.colors.header};
  opacity: 0.94;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.25);
  z-index: 100;
  transition: all 0.3s ease;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    right: 0;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    height: 2.5rem;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1rem;
    font-weight: 600;
    line-height: 100%;
    transition: all 0.3s ease;

    &:hover {
      backdrop-filter: blur(54.37px);
      background: ${({ theme }) => theme.colors.backgroundText};
      transition: all 0.3s ease;
    }
  }

  img {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const EditLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textRed};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2rem;
  text-decoration-line: underline;
`;

export const FollowersCount = styled.div`
  display: block;
  box-sizing: border-box;
  padding: 0.5rem;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-bottom: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 0.5rem;
  }
  
  h3 {
    @media (max-width: ${({ theme }) => theme.tablet}) {
      font-size: 1.2rem;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 0.8rem;
    }
  }
  p {
    @media (max-width: ${({ theme }) => theme.tablet}) {
      font-size: 1.2rem;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 0.8rem;
    }
  }
`;
