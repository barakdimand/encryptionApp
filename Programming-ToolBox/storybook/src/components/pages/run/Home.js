import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import ErrorPage from "../ErrorPage";
import PageNotFound from "../PageNotFound";
import Inbox from "../../common/Inbox";
import Codes from "../../common/Codes";
import { RUN_FOOTER_HEIGHT } from "../../../constants/app.constants";
import Navbar from "../../common/Navbar";

const HomeContent = (props) => {
  return <Navbar />;
};

const Home = (props) => {
  return (
    <div>
      {true && (
        <Container>
          {/* <Header /> */}
          <Router>
            <Switch>
              <Route exact path="/home" component={HomeContent} />
              <Route exact path="/inbox" component={Inbox} />
              <Route exact path="/codes/:id?" component={Codes} />

              <Route exact path="/error" component={ErrorPage} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </Router>

          <Footer />
        </Container>
      )}
    </div>
  );
};

const Container = styled.div`
  border: dotted;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  border: dotted;
  border-color: red;
  height: calc(100vh - ${RUN_FOOTER_HEIGHT + 15}px);
`;

export default Home;
