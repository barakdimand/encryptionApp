import React from "react";
import "./App.css";
import { Switch, Link, Route, BrowserRouter as Router } from "react-router-dom";
import NewsFeedPage from "./pages/NewsFeedPage";
import ProfilePage from "./pages/ProfilePage";
import TopNavbar from "./components/TopNavbar";

// This should come from a Data file as Nav data
const TopNavbarlabels = [
  {
    link: " Profile ",
    to: "/profile",
    path: "/profile",
    component: <ProfilePage />
  },
  {
    link: " News Feed ",
    to: "/newsfeed",
    path: "/newsfeed",
    component: <NewsFeedPage />
  },
  {
    link: " Home ",
    to: "/",
    path: "/",
    component: ""
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <TopNavbar labels={TopNavbarlabels} />
        </Router>
      </header>
    </div>
  );
}

export default App;
