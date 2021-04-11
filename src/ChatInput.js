import React, { useState } from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";

function ChatInput({ sendMessage }) {
  const [input, setInput] = useState("");

  const send = (e) => {
    e.preventDefault();
    if (!input) return;
    console.log(input);
    sendMessage(input);
  };

  return (
    <Container>
      <InputContainer>
        <form>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Message"
          />
          <SendButton type="submit" onClick={send}>
            <Send />
          </SendButton>
        </form>
      </InputContainer>
    </Container>
  );
}

export default ChatInput;

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-top: 10px;
  background: #3f0e40;
  box-shadow: 0 2px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
`;

const InputContainer = styled.div`
  // border: 1px solid #8d8d8e;
  background-color: white;
  border-radius: 4px;
  form {
    display: flex;
    padding-left: 10px;
    justify-content: space-between;
    align-items: center;
    height: 42px;
    input {
      flex: 1;
      border: none;
      font-size: 16px;
    }
    input:focus {
      outline: none;
    }
  }
`;

const SendButton = styled.div`
  background: #3f0e40;
  color: white;
  border-radius: 4px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
  cursor: pointer;

  .MuiSvgIcon-root {
    width: 18px;
  }

  :hover {
    background: #148567;
  }
`;

const Send = styled(SendIcon)`
  color: #d9d9d9;
`;
