import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
// import AccountBoxIcon from "@material-ui/icons/AccountBox";

function Header(props) {
  const name = props.user.name;
  const photo = props.user.photo;
  const signOut = props.signOut;
  return (
    <Container>
      <Main>
        <AccessTimeIcon />
        <SearchContainer>
          <Search>
            <input type="text" placeholder="Search...." />
          </Search>
        </SearchContainer>
        <HelpOutlineIcon />
      </Main>
      <UserContainer>
        <Name>{name}</Name>
        <UserImage onClick={signOut}>
          <img src={photo ? photo : ""} alt={name} />
        </UserImage>
      </UserContainer>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  background: #350d36;
  color: white;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
`;
const Main = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
`;
const SearchContainer = styled.div`
  min-width: 400px;
  margin-left: 10px;
  margin-right: 10px;
`;
const Search = styled.div`
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  width: 100%;
  border-radius: 5px;
  input {
    background-color: transparent;
    width: 380px;
    border: none;
    padding-left: 12px;
    padding-right: 8px;
    padding-top: 4px;
    padding-bottom: 4px;

    color: white;
  }
  input:focus {
    outline: none;
  }
`;
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
  // padding-left: 20px;
  position: absolute;
  right: 0;
`;
const Name = styled.div`
  padding-right: 8px;
`;
const UserImage = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    max-height: 30px;
    border-radius: 5px;
  }
`;
