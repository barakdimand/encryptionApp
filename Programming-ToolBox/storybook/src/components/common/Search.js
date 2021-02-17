import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { cacheInboxSearchInput } from "../../redux/actions/inbox.actions";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(cacheInboxSearchInput(search));
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
