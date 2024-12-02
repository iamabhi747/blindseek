import './game.css';
import Button from '../components/Button';

function Game({ sessionId }) {

  function leaveSession() {
    localStorage.removeItem("sessionId");
    window.location.reload();
  }

  const className = (sessionId == null) ? "Game hidden" : "Game";
  return (
    <div className={ className }>
      <header className="Game-header">
        <h1>Game</h1>
        <p>{ sessionId }</p>
        <Button onClick={leaveSession}>Leave Session</Button>
      </header>
    </div>
  );
}

export default Game;
