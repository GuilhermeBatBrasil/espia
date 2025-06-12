import { useState } from "react";
import FingerprintScanner from "./components/FingerprintsScanner";
import TerminalChat from "./components/TerminalChat";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [accessGranted, setAccessGranted] = useState(false);
  const [terminalFinished, setTerminalFinished] = useState(false);

  const handleAccess = () => {
    setAccessGranted(true); // ativa TerminalChat
  };

  if (!accessGranted) return <FingerprintScanner onAccessGranted={handleAccess} />;

  if (!terminalFinished) {
    return <TerminalChat onComplete={() => setTerminalFinished(true)} />;
  }

  return <Dashboard />;
}
