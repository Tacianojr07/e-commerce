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
    max-width: 375px;
    height: 300px;
    object-fit: cover;
  }
`;

export const StyledSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
export const StyledItem = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;
export const StyledRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  button {
    font-weight: 700;
    text-transform: uppercase;
    margin-right: 35px;
    cursor: pointer;
  }
`;
