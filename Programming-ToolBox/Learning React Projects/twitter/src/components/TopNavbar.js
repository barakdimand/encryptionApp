import React from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";
import NewsFeedPage from "../pages/NewsFeedPage";

const TopNavbar = props => {
  const labels = props.labels;
  return (
    <div>
      {labels.map(label => {
        return <Link to={label.to}>{label.link}</Link>;
      })}
      <Switch>
        {labels.map(label => {
          return <Route path={label.path} children={label.component} />;
        })}
      </Switch>
    </div>
  );
};

export default TopNavbar;
