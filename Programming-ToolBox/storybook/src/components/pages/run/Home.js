import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Footer from "./Footer";
import Header from "./Header";
import ErrorPage from "../ErrorPage";
import PageNotFound from "../PageNotFound";
import Inbox from "../../common/Inbox";
import Codes from "../../common/Codes";
import { RUN_FOOTER_HEIGHT } from "../../../constants/app.constants";
import Navbar from "../../common/Navbar";

const Home = () => {
  const state = useSelector((storeState) => storeState);
  const { username } = state.session;
  return (
    <Container>
      <Navbar />
      <ContentWrapper>hi {username}</ContentWrapper>
      <Footer />
    </Container>
  );
};

const Container = styled.div``;

const ContentWrapper = styled.div``;

export default Home;
