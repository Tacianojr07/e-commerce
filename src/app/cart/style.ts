import styled from "styled-components";
export const StyledMain = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 7.5rem;

  h1 {
    text-align: center;
    margin-left: 6rem;
    margin-bottom: 1rem;
  }
  p {
    margin-top: 1rem;
    font-weight: 700;
  }

  img {
    width: 100%;
    max-width: 275px;
    height: 200px;
  }
  button {
    cursor: pointer;
    background: #4545;
    padding: 5px 8px;
    border-radius: 5px;
  }
`;
export const StyledItemsCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 2px solid #4545;
`;

export const StyledEmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  p,
  a {
    text-decoration: none;
    color: #000;
    margin-left: 6rem;
  }
  a {
    font-weight: 700;
    background: #1212;
    padding: 1rem 2rem;
    border-radius: 1rem;
  }
`;
