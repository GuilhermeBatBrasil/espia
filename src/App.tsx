import { useState } from "react";
import FingerprintScanner from "./components/FingerprintsScanner";
import TerminalChat from "./components/TerminalChat";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [accessGranted, setAccessGranted] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);

  const handleAccess = () => {
    setAccessGranted(true);
    setTimeout(() => {
      setShowTerminal(true);
    }, 4000); // mostra terminal depois de 4s
  };

  if (!accessGranted) return <FingerprintScanner onAccessGranted={handleAccess} />;

  return (
    <div>
      {showTerminal ? <Dashboard /> : <TerminalChat />}
    </div>
  );
}
