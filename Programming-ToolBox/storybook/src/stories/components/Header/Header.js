import React from "react";
import styled from "styled-components";

const Header = ({ children, ...rest }) => {
  return <HeaderStyle {...rest}>{children}</HeaderStyle>;
};

const HeaderStyle = styled.h1`
  color: whitesmoke;
  background-color: black;
  border: 0.8em 1em;
  border-radius: 1rem;
  padding-left: 15px;
  padding-right: 15px;
`;

export default Header;
