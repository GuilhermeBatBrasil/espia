import { useState } from "react";
import "../styles/FingerprintScanner.css";

export default function FingerprintScanner({ onAccessGranted }: { onAccessGranted: () => void }) {
  const [scanning, setScanning] = useState(false);

  const handleScan = () => {
    setScanning(true);
    setTimeout(() => {
      onAccessGranted();
    }, 2000); // 2s de "escaneamento"
  };

  return (
    <div className="scanner-container">
      <h1>Agente Secreta</h1>
      <p>Coloque sua digital para acessar o sistema:</p>

      <div
        className={`fingerprint ${scanning ? "scanning" : ""}`}
        onClick={handleScan}
      >
        🌀
      </div>

      <p className="scan-status">
        {scanning ? "Escaneando..." : "Clique na digital"}
      </p>
    </div>
  );
}
