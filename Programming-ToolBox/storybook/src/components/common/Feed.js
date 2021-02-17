import styled from "styled-components";

const Feed = (props) => {
  const { messages } = props;
  console.log(messages);
  return (
    <FeedContainer>
      {messages.map((msg) => {
        const { creationTime, creator, subject, icon, content } = msg;
        return (
          <MessageWrapper>
            <IconWrapper>{icon}</IconWrapper>
            <ContentWrapper>
              <UpperSection>
                <div>{creator}</div>
                <div>{subject}</div>
                <div>{creationTime}</div>
              </UpperSection>
              <LowerSection>{content}</LowerSection>
            </ContentWrapper>
          </MessageWrapper>
        );
      })}
    </FeedContainer>
  );
};

const MessageWrapper = styled.div``;

const FeedContainer = styled.div``;

const IconWrapper = styled.div`
  width: 100px;
  height: 100px;
  border: dotted;
`;
const ContentWrapper = styled.div``;

const UpperSection = styled.div``;

const LowerSection = styled.div``;

export default Feed;
