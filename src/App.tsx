import { useState } from "react";
import IntroScreen from "./components/IntroScreen";
import Dashboard from "./components/Dashboard";

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div>
      {entered ? <Dashboard /> : <IntroScreen onEnter={() => setEntered(true)} />}
    </div>
  );
}

export default App;
