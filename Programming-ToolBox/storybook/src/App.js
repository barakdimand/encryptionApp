import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// pages
import LogIn from "../src/components/pages/run/Login";
import PageNotFound from "../src/components/pages/PageNotFound";
import ErrorPage from "../src/components/pages/ErrorPage";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LogIn} />

        <Route exact path="/error" component={ErrorPage} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;
