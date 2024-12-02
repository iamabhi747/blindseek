import './game.css';
import SessionControl from './SessionControl';
import LogSection from './LogSection';
import ViewScreen from './ViewScreen';
import ControlDoc from './ControlDoc';

function Game({ sessionId }) {

  const className = "h-screen p-4 flex flex-col gap-4 Game" + (sessionId == null ? "hidden" : "");
  return (
    <div className={ className }>
      <div className='flex-[4_1_0%] flex flex-row gap-4'>
        <div className="flex-[3_1_0%] layout-card">
          <ViewScreen />
        </div>
        <div className='flex-1 flex flex-col gap-4'>
          <div className='flex-1 layout-card'>
            <SessionControl sessionId={sessionId} />
          </div>
          <div className='flex-[15_1_0%] layout-card'>
            <LogSection />
          </div>
        </div>
      </div>
      <div className='flex-1 layout-card'>
        <ControlDoc />
      </div>
    </div>
  );
}

export default Game;
