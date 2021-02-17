// import { useEffect } from "react";

import styled from "styled-components";
import Search from "./Search";
import { RUN_FOOTER_HEIGHT } from "../../constants/app.constants";
import { useHistory } from "react-router-dom";
import Feed from "./Feed";
import { useSelector, useDispatch } from "react-redux";
// import { addMessage } from "../../redux/actions/inbox.actions";

const mockData = [
  {
    creationTime: Date(),
    creator: "barak",
    content:
      "Aliquam facilisis felis a nibh fermentum, ut rutrum nisi mattis. Proin euismod eget augue vel dignissim. Aliquam vehicula nunc efficitur lacus laoreet, non mattis enim rhoncus. Aliquam sed massa non metus consectetur varius sit amet vitae orci. Ut egestas felis quis quam vulputate, et pellentesque lectus accumsan. ",
  },
  {
    creationTime: Date(),
    creator: "dimand",
    content:
      "Aliquam facilisis felis a nibh fermentum, ut rutrum nisi mattis. Proin euismod eget augue vel dignissim. Aliquam vehicula nunc efficitur lacus laoreet, non mattis enim rhoncus. Aliquam sed massa non metus consectetur varius sit amet vitae orci. Ut egestas felis quis quam vulputate, et pellentesque lectus accumsan. ",
  },
];

const Inbox = () => {
  const history = useHistory();
  const state = useSelector((storeState) => storeState);
  const { inboxMessages } = state.inbox;

  return (
    <Container>
      <h1>Inbox</h1>
      <Search />
      <Feed messages={inboxMessages} />
      <button onClick={() => history.push("/home")}>Home</button>
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

const FeedWrapper = styled.div``;

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

//   // ex getting or selecting store data
//   const state = useSelector((storeState) => storeState);
//   console.log(state);

//   // ex setting or adding to store data
//   const dispatch = useDispatch();
//   dispatch(addMessage("first message"));

//   // make sure to update some data only when it is changed
//   const response = useSelector((state) => state.response);
//   useEffect(() => {}, [response]);
