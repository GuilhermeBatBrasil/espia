import { useState } from "react";
import "../styles/FingerprintScanner.css";

export default function FingerprintScanner({ onAccessGranted }: { onAccessGranted: () => void }) {
  const [scanning, setScanning] = useState(false);

  const handleScan = () => {
    if (scanning) return;

    setScanning(true);
    
    // Vibração (em celulares que suportam)
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100]);
    }

    setTimeout(() => {
      onAccessGranted();
    }, 2500);
  };

  return (
    <div className="scanner-container">
      <h1 className="scanner-title">🔒 Acesso Agente Secreta</h1>
      <p className="scanner-subtitle">Toque sua digital para entrar no sistema ultra secreto 💖</p>

      <div className={`fingerprint-wrapper ${scanning ? "scanning" : ""}`} onClick={handleScan}>
        <div className="fingerprint-icon">🌀</div>
        {scanning && <div className="scan-line" />}
      </div>

      <p className="scan-status">
        {scanning ? "Escaneando identidade da agente..." : "Clique na digital para iniciar"}
      </p>
    </div>
  );
}
