// import { useEffect } from "react";

import styled from "styled-components";
import Search from "./Search";
import { RUN_FOOTER_HEIGHT } from "../../constants/app.constants";
import { useHistory } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { addMessage } from "../../redux/actions/inbox.actions";

const Inbox = () => {
  //   // ex getting or selecting store data
  //   const state = useSelector((storeState) => storeState);
  //   console.log(state);

  //   // ex setting or adding to store data
  //   const dispatch = useDispatch();
  //   dispatch(addMessage("first message"));

  //   // make sure to update some data only when it is changed
  //   const response = useSelector((state) => state.response);
  //   useEffect(() => {}, [response]);

  const history = useHistory();
  const goHome = () => {
    history.push("/home");
  };

  return (
    <Container>
      <h1>Inbox</h1>
      <Search />
      <InboxWrapper>Feed Content</InboxWrapper>
      <button onClick={goHome}>Home</button>
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh - (${RUN_FOOTER_HEIGHT}px));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const InboxWrapper = styled.div``;

export default Inbox;

// This would go in the component before the return at the top
//   const foo = () => console.log("foo");

//   useEffect(() => {
//     // socket.connect(123)
//     foo();
//     document.addEventListener("click", foo);

//     return () => {
//       // socket.disconnect(123)
//       foo();
//       document.removeEventListener("click", foo);
//     };
//   }, []);
