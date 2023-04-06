import React from "react";
import { Nav, Brand, NavButtons, Button } from "./Navbar.styles";

const Navbar = ({
  onSignUp,
  onSignClose,
  onLogout,
  showSignUpForm,
  showHome,
}) => {
  return (
    <Nav>
      <Brand>LoginPage</Brand>
      <NavButtons>
        {showSignUpForm ? (
          <Button onClick={onSignClose}>Sign in</Button>
        ) : showHome ? (
          <Button onClick={onLogout}>Logout</Button>
        ) : (
          <Button onClick={onSignUp}>Sign up</Button>
        )}
      </NavButtons>
    </Nav>
  );
};

export default Navbar;
