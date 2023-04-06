import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import GlobalStyles from "./GlobalStyles";
import HomeForm from "./components/HomeForm/HomeFrom";

const App = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [login, setLogin] = useState(false);

  const handleSignUp = () => {
    setShowSignUpForm(true);
  };

  const handleSignUpFormClose = () => {
    setShowSignUpForm(false);
  };

  const handleLogin = () => {
    setLogin(true);
  };

  const handleLogout = () => {
    setLogin(false);
    localStorage.clear();
  };

  useEffect(() => {
    if (localStorage.getItem("id")) {
      setLogin(true);
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      <Navbar
        onSignUp={handleSignUp}
        onSignClose={handleSignUpFormClose}
        onLogout={handleLogout}
        showSignUpForm={showSignUpForm}
        showHome={login}
      />
      {!showSignUpForm && !login && <LoginForm onSuccess={handleLogin} />}
      {login && <HomeForm />}
      {showSignUpForm && <SignUpForm onClose={handleSignUpFormClose} />}
    </>
  );
};

export default App;
