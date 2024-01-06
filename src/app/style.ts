import { styled } from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 8rem;
  margin: 1rem 4rem;

  h1 {
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
    max-width: 345px;
    height: 300px;
    object-fit: cover;
  }
`;
