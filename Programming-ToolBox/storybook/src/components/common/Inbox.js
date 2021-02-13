import styled from "styled-components";
import Search from "./Search";
import { RUN_FOOTER_HEIGHT } from "../../constants/app.constants";

const Inbox = () => {
  return (
    <Container>
      <h1>Inbox</h1>
      <Search />
      <InboxWrapper>Feed Content</InboxWrapper>
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
