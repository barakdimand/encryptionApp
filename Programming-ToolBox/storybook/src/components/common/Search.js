import styled from "styled-components";
import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleOnClick = () => {
    console.log(search);
  };

  return (
    <Container>
      <TextInputWrapper>
        <input
          placeholder={"Search..."}
          onChange={(e) => setSearch(e.target.value)}
        />
      </TextInputWrapper>
      <button onClick={handleOnClick}>Search</button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  border: dotted;
  border-radius: 20px;
`;

export default Search;
