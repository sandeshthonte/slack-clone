import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { SidebarData } from "../src/Data/SidebarData";
import db from "./Firebase";
import { useHistory } from "react-router-dom";

function Sidebar(props) {
  const addChannel = () => {
    const promptName = prompt("Enter Channel Name");
    if (promptName) {
      db.collection("rooms").add({
        name: promptName,
      });
    }
  };
  const history = useHistory();

  const goToChannel = (id) => {
    if (id) {
      console.log(id);
      history.push(`/room/${id}`);
    }
  };

  return (
    <Container>
      <WorkspaceContainer>
        <Name>Sandesh</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkspaceContainer>
      <MainChannels>
        {SidebarData.map((SidebarItem) => (
          <MainChannelItem>
            <div className="iconchannel">{SidebarItem.icon}</div>
            <div className="textchannel">{SidebarItem.text}</div>
          </MainChannelItem>
        ))}
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer>
          <div> Channels </div>
          <AddCircleOutlineIcon onClick={addChannel} />
        </NewChannelContainer>
        <ChannelsList>
          {props.rooms.map((item) => (
            <Channel onClick={() => goToChannel(item.id)}>
              # {item.name}
            </Channel>
          ))}
        </ChannelsList>
      </ChannelsContainer>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background: #3f0e40;
`;

const WorkspaceContainer = styled.div`
  // box-shadow: inset 0 0 0 1px rgb(104 74 104);

  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  justify-content: space-between;
  border-bottom: 1px solid #532753;
`;

const Name = styled.div`
  // box-shadow: inset 0 0 0 1px rgb(104 74 104);
`;

const NewMessage = styled.div`
  // box-shadow: inset 0 0 0 1px rgb(104 74 104);
  color: #3f0e40;
  fill: #3f0e40;
  background: white;
  // padding-right: 19px;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`;

const MainChannels = styled.div`
  // box-shadow: inset 0 0 0 1px rgb(104 74 104);
`;

const MainChannelItem = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  grid-template-columns: 15% auto;
  height: 1fr;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
`;

const ChannelsContainer = styled.div`
  // box-shadow: inset 0 0 0 1px rgb(104 74 104);
  color: white;
  border-bottom: 1px solid #532753;
  border-top: 1px solid #532753;
`;

const ChannelsList = styled.div``;

const Channel = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  height: 38px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
`;

const NewChannelContainer = styled.div`
  // box-shadow: inset 0 0 0 1px rgb(104 74 104);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 19px;
  height: 64px;
  padding-right: 19px;
`;
