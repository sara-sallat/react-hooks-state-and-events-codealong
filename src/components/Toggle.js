import React, { useState } from "react";

function Toggle() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleHandler = () => {
    setIsToggled((isToggled) => !isToggled);
  };

  const color = isToggled ? "red" : "white";
  return (
    <button onClick={toggleHandler} style={{ background: color }}>
      {isToggled ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
