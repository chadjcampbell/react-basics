import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  function refreshClock() {
    setTime(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="border">
      <h4>This is a clock!</h4>
      <h5>It is currently {time.toLocaleTimeString("en-US")}</h5>
    </div>
  );
}

export default Clock;
