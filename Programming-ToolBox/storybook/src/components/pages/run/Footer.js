import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { RUN_FOOTER_HEIGHT, THEME } from "../../../constants/app.constants";

const Footer = () => {
  return (
    <FooterWrapper>
      <div>I'm a footer</div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 10;
  background-color: ${THEME.primary};
  height: ${RUN_FOOTER_HEIGHT}px;
  border: dotted;
  border-color: blue;
`;

export default Footer;
