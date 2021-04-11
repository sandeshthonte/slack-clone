import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import db from "./Firebase";
import { useParams } from "react-router";
import firebase from "firebase";

function Chat(props) {
  let { channelId } = useParams();
  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState([]);
  const name = props.user.name;
  const photo = props.user.photo;

  const getMessages = () => {
    db.collection("rooms")
      .doc(channelId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        let messages = snapshot.docs.map((doc) => doc.data());
        setMessages(messages);
        // console.log(messages);
      });
  };

  const sendMessage = (text) => {
    if (channelId) {
      let payload = {
        text: text,
        user: name,
        userImage: photo,
        timestamp: firebase.firestore.Timestamp.now(),
      };
      db.collection("rooms").doc(channelId).collection("messages").add(payload);
    }
  };

  useEffect(() => {
    getChannel();
    getMessages();
  }, [channelId]);

  const getChannel = () => {
    db.collection("rooms")
      .doc(channelId)
      .onSnapshot((snapshot) => {
        setChannel(snapshot.data());
        // console.log(snapshot.data());
      });
  };

  return (
    <Container>
      <Header>
        <Channel>
          <ChannelName># {channel && channel.name}</ChannelName>
          <ChannelInfo>
            Work
            Based...........................................................
          </ChannelInfo>
        </Channel>
        <ChannelDetails>
          <div>Details</div>
          <Info />
        </ChannelDetails>
      </Header>
      <MessageContainer>
        {messages.length > 0 &&
          messages.map((data, index) => (
            <ChatMessage
              text={data.text}
              name={data.user}
              userImage={data.userImage}
              timestamp={data.timestamp}
            />
          ))}
      </MessageContainer>
      <ChatInput sendMessage={sendMessage} />
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
  min-height: 0;
  
`;
const Channel = styled.div`
  
`;
const ChannelName = styled.div`
  font-weight: 700;
`;

const ChannelInfo = styled.div`
  font-weight: 300;
  color: #606060;
  font-size: 13px;
  margin-top: 8px;
`;

const Info = styled(InfoOutlinedIcon)`
  margin-left: 10px;
`;

const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  color: #606060;
`;
const Header = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(83, 13, 83, 0.13);
  justify-content: space-between;
  
`;
const MessageContainer = styled.div`
  overflow-y: scroll;
  
`;
