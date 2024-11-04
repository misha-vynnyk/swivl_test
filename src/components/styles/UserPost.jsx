import styled from "styled-components";

export const UserPost = styled.section`
  display: block;
  padding: 1rem;
  min-width: 10rem;
`;

export const Posts = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    gap: 1rem;
  }
`;

export const PublicPrivateSwitcher = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-bottom: 2rem;
    justify-content: center;
  }
`;

export const SwitcherButton = styled.button`
  margin: 0 1.5rem;
  width: 2.6rem;
  height: 1.5rem;
  border: none;
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.textRed};
  cursor: pointer;

  div {
    width: 1.1rem;
    height: 1.1rem;
    margin: 0.2rem;
    background: ${({ theme }) => theme.colors.body};
    border-radius: 50%;
    transition: all 0.3s ease;
    transform: ${({ $isPublic }) =>
      $isPublic ? "translateX(0)" : "translateX(1rem)"};
  }
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  max-width: 30rem;
  min-width: 20rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.header};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: ${({ theme }) => theme.mobile}) {
    min-width: 18rem;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1rem;
    font-weight: 600;
    text-align: left;
    margin-bottom: 0.8rem;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 0.8rem;
    }
  }

  span {
    display: inline-block;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary};
    border-radius: 6px;
    padding: 0.1rem;
    text-align: center;
    background: ${({ theme }) => theme.colors.backgroundText};
    font-size: 1rem;
    font-weight: 600;
    line-height: 100%;
    height: 1.5rem;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 0.8rem;
    }
  }

  h3 {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 2.2rem;
    font-weight: 400;
    line-height: 3rem;
    text-align: left;

    @media (max-width: ${({ theme }) => theme.tablet}) {
      line-height: 2rem;
      font-size: 1.8rem;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
      line-height: 1.5rem;
      font-size: 1.3rem;
    }
  }

  a {
    font-size: 1rem;
    font-weight: 600;
    line-height: 100%;
    height: 1.5rem;
  }
`;

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  img {
    margin-right: 0.5rem;
  }

  a {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.textRed};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.2rem;
  }
`;
