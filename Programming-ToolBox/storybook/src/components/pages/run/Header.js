import styled from "styled-components";
import { RUN_HEADER_HEIGHT, THEME } from "../../../constants/app.constants";

import logo from "../../../assets/logo.svg";

const Header = () => {
  return (
    <HeaderWrapper>
      I'm a header <img height={30} src={logo} />{" "}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: ${THEME.primary};
  height: ${RUN_HEADER_HEIGHT}px;
`;

export default Header;
