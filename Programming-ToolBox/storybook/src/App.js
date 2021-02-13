import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// pages
import LogIn from "../src/components/pages/run/Login";
import PageNotFound from "../src/components/pages/PageNotFound";
import ErrorPage from "../src/components/pages/ErrorPage";
import Home from "../src/components/pages/run/Home";
import Inbox from "../src/components/common/Inbox";
import Codes from "../src/components/common/Codes";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/inbox" component={Inbox} />
        <Route exact path="/codes/:id?" component={Codes} />

        <Route exact path="/error" component={ErrorPage} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;
