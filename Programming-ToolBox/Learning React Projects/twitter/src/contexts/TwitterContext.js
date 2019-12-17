import React from "react";

const TwitterContext = React.createContext({
  tweets: [],
  addName: name => {}
});

export default TwitterContext;
