import { useState, useEffect } from "react";

import "./App.css";

import Clock from "./time";
import Clock2 from "./time2";
import Button from "./nappi2";
import Toolbar from "./tools";
import LightSwitch from "./lightSwitch";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = ` Klicks ${count * 2} `;
  });

  return (
    <>
      <h1>React Hooks</h1>
      <Toolbar />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br />
        <br />
        <div>
          <Button />
        </div>
        <div>
          <Clock />
        </div>

        <div>
          <Clock2 />
        </div>
      </div>
      <div>
        <LightSwitch />
      </div>
    </>
  );
}

export default App;
