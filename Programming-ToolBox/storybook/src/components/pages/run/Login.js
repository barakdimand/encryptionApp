import styled from "styled-components";

import { useState } from "react";

import { RUN_FOOTER_HEIGHT, THEME } from "../../../constants/app.constants";
import Footer from "./Footer";
import Header from "./Header";
import LoginForm from "../../common/LoginForm";

const LogIn = () => {
  return (
    <div>
      <Header />
      <Content>
        <LoginForm />
      </Content>
      <Footer />
    </div>
  );
};

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - (${RUN_FOOTER_HEIGHT}px));
  background-color: ${THEME.secondary};
`;

export default LogIn;
