import styled from "styled-components";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const history = useHistory();
  const handleOnClick = () => {
    verifyUser() && (setIsLoggedIn(true) || history.push("/home"));
  };

  const verifyUser = () => {
    return username === "admin" && password === "admin";
  };

  return (
    <Container>
      <TextInputWrapper>
        <input
          placeholder={"username..."}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </TextInputWrapper>
      <TextInputWrapper>
        <input
          placeholder={"password..."}
          onChange={(e) => setPassword(e.target.value)}
        />
      </TextInputWrapper>
      <button onClick={handleOnClick}>Sign In</button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  border: dotted;
  border-radius: 20px;
`;

export default LoginForm;
