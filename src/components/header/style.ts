import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  max-width: 1920px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 8rem;
  height: 80px;
`;

export const StyledUl = styled.ul`
  display: flex;
  gap: 10px;

  a {
    text-decoration: none;
    color: #000;
    opacity: 0.75;
    transition: 0.4;
    &:hover {
      color: #000;
      opacity: 1;
    }
  }
`;

export const StyledAmount = styled.p`
  background-color: #454545;
  border-radius: 100%;
  position: absolute;
  padding: 1px 6px;
  font-size: 13px;
  right: 7.8%;
  color: white;
`;
