import styled from "styled-components";

const TextInput = () => {
  return <TextInputWrapper>enter text here</TextInputWrapper>;
};

const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
`;

export default TextInput;
