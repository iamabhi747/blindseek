import { IoExit } from "react-icons/io5";
import { FaCopy } from "react-icons/fa";

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      textArea.remove();
      return true;
    } catch (err) {
      textArea.remove();
      return false;
    }
  }
 };
 
 export { copyToClipboard };

function SessionControl({ sessionId }) {
  
  function leaveSession() {
    localStorage.removeItem("sessionId");
    window.location.reload();
  }

  function copySessionId() {
    copyToClipboard(sessionId);
  }

  return (
    <div className="w-full h-full content-center p-2 flex flex-row gap-3" style={{color: "rgb(244, 244, 245)"}}>
      <div className="w-full h-full content-center">{sessionId}</div>
      <button className=" w-8 h-8 content-center" onClick={copySessionId}>
        <FaCopy className="w-5 h-5" />
      </button>
      <button className=" w-8 h-8 content-center" onClick={leaveSession}>
        <IoExit size={30} className="w-full h-full" />
      </button>
    </div>
  )
}

export default SessionControl;