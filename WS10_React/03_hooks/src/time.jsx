import { useState } from "react";

function Clock() {
  const [currentDateTime, setCurrentDateTime] = useState(
    new Date().toLocaleString("fi-FI")
  );
  setInterval(
    () => setCurrentDateTime(new Date().toLocaleString("fi-FI")),
    1000
  );

  return (
    <div>
      <p> {currentDateTime}</p>
    </div>
  );
}
export default Clock;
