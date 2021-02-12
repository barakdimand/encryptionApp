import React from "react";
import styled from "styled-components";

const Button = ({ children, ...rest }) => {
  return (
    <ButtonStyle>
      <button className="button" {...rest}>
        {children}
      </button>
    </ButtonStyle>
  );
};

const ButtonStyle = styled.div`
  color: whitesmoke;
  background-color: blueviolet;
  border: 0.8em 1em;
  border-radius: 1rem;
`;

export default Button;
