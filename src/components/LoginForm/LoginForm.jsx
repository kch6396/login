import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Input, Button, Header } from "./LoginForm.styles";
import HomeForm from "../HomeForm/HomeFrom";

const LoginForm = ({ onSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const serverApi = "http://13.125.255.7:8000";

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${serverApi}/login/`, {
        username,
        password,
      });
      console.log(response);
      alert("로그인 성공");
      onSuccess();
      localStorage.setItem("id", response.data.username);
      localStorage.setItem("username", response.data.name);
    } catch (error) {
      alert("아이디나 비밀번호를 다시 확인해주세요.");
      console.log(error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Header>로그인</Header>
        <Input
          type="text"
          placeholder="Id"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Sign in</Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
