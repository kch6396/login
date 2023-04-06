import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
`;

export const Brand = styled.div`
  color: #fff;
  font-weight: bold;
`;

export const NavButtons = styled.div`
  display: flex;
`;

export const Button = styled.button`
  margin-left: 10px;
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
