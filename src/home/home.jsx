import "./home.css";
import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import Button from "../components/Button";

function generateRandomHexId() {
  return Math.floor((1 + Math.random()) * 0x100000000)
    .toString(16)
    .substring(1);
}

function Home({ setSessionId }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const sessionId = localStorage.getItem("sessionId", null);
    if (sessionId != null) {
      setSessionId(sessionId);
      setHidden(true);
    }
  }, []);

  function newGame() {
    const sessionId = generateRandomHexId();
    localStorage.setItem("sessionId", sessionId);
    setSessionId(sessionId);
    setHidden(true);
  }
  
  function joinGame() {
    const sessionId = prompt("Enter the session ID");
    localStorage.setItem("sessionId", sessionId);
    setSessionId(sessionId);
    setHidden(true);
  }

  const className = hidden ? "Home hidden" : "Home";
  return (
    <div className={ className }>
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <div>
          <Button onClick={newGame}>New Game</Button>
          <Button onClick={joinGame}>Join</Button>
        </div>
      </header>
    </div>
  );
}

export default Home;
