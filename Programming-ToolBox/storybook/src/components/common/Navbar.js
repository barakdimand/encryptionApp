import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import { RUN_FOOTER_HEIGHT } from "../../constants/app.constants";

const Navbar = () => {
  const history = useHistory();
  return (
    <ContentWrapper>
      <div onClick={() => history.push("/inbox")}>inbox</div>
      <div>sent</div>
      <div>draft</div>
      <div onClick={() => history.push("/codes")}>codes</div>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border: dotted;
  border-color: red;
  height: calc(100vh - ${RUN_FOOTER_HEIGHT + 15}px);
`;

export default Navbar;
