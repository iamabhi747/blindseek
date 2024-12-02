import { useState } from 'react';
import Home from './home/home';
import Game from './game/game';

function App() {
  const [sessionId, setSessionId] = useState(null);
  return (
    <div className="App">
      <Home setSessionId={setSessionId} />
      <Game sessionId={sessionId}/>
    </div>
  );
}

export default App;
