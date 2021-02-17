import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";

// pages
import LogIn from "../src/components/pages/run/Login";
import PageNotFound from "../src/components/pages/PageNotFound";
import ErrorPage from "../src/components/pages/ErrorPage";
import Home from "../src/components/pages/run/Home";
import Inbox from "../src/components/common/Inbox";
import Codes from "../src/components/common/Codes";

import Footer from "./components/pages/run/Footer";

import store from "../src/redux/store";

import "./App.css";

const App = () => {
  window.store = store;
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/inbox" component={Inbox} />
          <Route exact path="/codes/:id?" component={Codes} />

          <Route exact path="/error" component={ErrorPage} />
          <Route path="*" component={PageNotFound} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </Provider>
  );
};

export default App;

//   // ex getting or selecting store data
//   const state = useSelector((storeState) => storeState);
//   console.log(state);

//   // ex setting or adding to store data
//   const dispatch = useDispatch();
//   dispatch(addMessage("first message"));

//   // make sure to update some data only when it is changed
//   const response = useSelector((state) => state.response);
//   useEffect(() => {}, [response]);
