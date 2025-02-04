import { useEffect, useState } from "react";
import Button from "../ui/Button";
import FormRow from "../ui/FormRow";
import { useLogin } from "../features/login/useLogin";
import { useUser } from "../features/login/useUser";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginDiv = styled.div`
  padding: 3.2rem;
  background-color: var(--color-background);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-lg);
`;

const Form = styled.form`
  display: grid;
`;
const LoginButton = styled(Button)`
  text-align: center;
`;

function Login({ isLogged, setIsLogged }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();
  const [email, setEmail] = useState("robfrontdev@gmail.com");
  const [password, setPassword] = useState("123456789");

  const { login, isLogin } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }
  useEffect(
    function () {
      if (isAuthenticated) navigate("/panel");
    },
    [isAuthenticated, navigate]
  );
  return (
    <LoginDiv>
      <Form onSubmit={handleSubmit}>
        <FormRow>
          <label>E-mail</label>
          <input
            type="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLogin}
          />
        </FormRow>
        <FormRow>
          <label>Hasło</label>
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLogin}
          />
        </FormRow>
        <LoginButton size="large" variation="primary" disabled={isLogin}>
          Zaloguj
        </LoginButton>
      </Form>
    </LoginDiv>
  );
}

export default Login;
