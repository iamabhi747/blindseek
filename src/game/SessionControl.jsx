
function SessionControl({ sessionId }) {
  
  function leaveSession() {
    localStorage.removeItem("sessionId");
    window.location.reload();
  }

  return (
    <div>
    </div>
  )
}

export default SessionControl;