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

const HomeContent = (props) => {
  const history = useHistory();
  return (
    <ContentWrapper>
      <div onClick={() => history.push("/inbox")}>inbox</div>
      <div>sent</div>
      <div>draft</div>
      <div>codes</div>
    </ContentWrapper>
  );
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

const Container = styled.div``;

const ContentWrapper = styled.div``;

export default Home;
