import styled from "styled-components";
import { RUN_FOOTER_HEIGHT, THEME } from "../../../constants/app.constants";
import TextInput from "../../common/TextInput";
import Footer from "./Footer";
import Header from "./Header";

const LogIn = () => {
  return (
    <div>
      <Header />
      <Content>
        <TextInput />
        <TextInput />
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
  height: calc(100vh - (${RUN_FOOTER_HEIGHT}px + 20px));
  background-color: ${THEME.secondary};
`;

export default LogIn;
