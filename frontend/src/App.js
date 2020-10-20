import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import drone from "./drone.png";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Welcome to DroneChop!</h1>
        <img src={drone} className="App-logo" alt="logo" />
      </Container>
      <Footer />
    </>
  );
};

export default App;
