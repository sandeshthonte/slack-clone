import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import { Container } from "react-bootstrap";
import styled from "styled-components";
import db, { auth } from "./Firebase";

function App() {
  const [rooms, setRooms] = useState([]);
  const [user, setUsers] = useState(JSON.parse(localStorage.getItem("user")));

  const getChannels = () => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => {
          return { id: doc.id, name: doc.data().name };
        })
      );
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("user");
      setUsers(null);
      console.log("signed out");
    });
  };

  useEffect(() => {
    getChannels();
  }, []);

  // console.log(user);

  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  // console.log(user + "hiiiiiiiiii");

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          {!user ? (
            <Login setUsers={setUsers} />
          ) : (
            <Container>
              <Header signOut={signOut} user={user} />
              <Main>
                <Sidebar rooms={rooms} />
                <Switch>
                  <Route path="/room/:channelId">
                    <Chat user={user} />
                  </Route>
                  <Route path="/">Select or Create Channel.</Route>
                </Switch>
              </Main>
            </Container>
          )}
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px minmax(0, 1fr);
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
`;
