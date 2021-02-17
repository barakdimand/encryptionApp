import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import {
  RUN_FOOTER_HEIGHT,
  RUN_NAVBAR_HEIGHT,
} from "../../constants/app.constants";

const Navbar = () => {
  const history = useHistory();
  return (
    <ContentWrapper>
      <NavOption onClick={() => history.push("/inbox")}>inbox</NavOption>
      <NavOption>sent</NavOption>
      <NavOption>draft</NavOption>
      <NavOption onClick={() => history.push("/codes")}>codes</NavOption>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border: dotted;
  border-color: red;
  height: ${RUN_NAVBAR_HEIGHT}px;
`;

const NavOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Navbar;
