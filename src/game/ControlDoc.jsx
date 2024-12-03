import Inventory from "./Inventory";
import MiscControls from "./MiscControls";
import ViewControl from "./ViewControl";
import Scoreboard from "./Scoreboard";
import JoyStick from "./JoyStick";

function ControlDoc() {
  return (
    <div className="ControlDoc w-full h-full p-2 flex flex-row gap-2">
      <div className="flex-[2_1_0%]">
        <Inventory />
      </div>
      <div className="flex-[1_1_0%]">
        <MiscControls />
      </div>
      <div className="flex-[1.5_1_0%]">
        <ViewControl />
      </div>
      <div className="flex-[3_1_0%]">
        <Scoreboard />
      </div>
      <div className="flex-[2_1_0%]">
        <JoyStick />
      </div>
    </div>
  )
}

export default ControlDoc;