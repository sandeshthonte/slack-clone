import React from "react";
import styled from "styled-components";

function ChatMessage({ text, name, userImage, timestamp }) {
  return (
    <Container>
      <UserAvatar>
        <img src={userImage} alt="Me" />
      </UserAvatar>
      <MessageContent>
        <Name>
          {name}
          <span>{new Date(timestamp.toDate()).toUTCString()}</span>
        </Name>
        <Text>{text}</Text>
      </MessageContent>
    </Container>
  );
}

export default ChatMessage;

const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;
  // box-shadow: 0 2px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
`;

const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 8px;
  img {
    width: 100%;
    border-radius: 3px;
  }
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 15px;
  line-height: 1.4;

  span {
    margin-left: 8px;
    font-weight: 400;
    color: rgb(97, 96, 97);
    font-size: 13px;
  }
`;

const Text = styled.div``;
