import React, { useState } from "react";

function App() {
  const [state, newState] = useState("초기값");
  return (
    <>
      {state}
      <button
        onMouseEnter={() => {
          newState("갱신값");
        }}
      ></button>
      {state}
    </>
  );
}

export default App;
