import "../styles/SecretMessage.css";
import { useState, useEffect } from "react";

export default function SecretMessage() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const fullText = `
📡 TRANSMISSÃO SEGURA INICIADA...

Agente Juju Araujo, temos uma missão de prioridade MÁXIMA para você.

Objetivo: Localizar e capturar todos os beijos do remetente.
Local de operação: Coração do seu admirador secreto (vulgo, eu 🕵️‍♂️💘).

Instruções:
- Continue espalhando charme por onde passar.
- Use suas habilidades especiais de gentileza e beleza descomunal.
- Mantenha contato visual por tempo indeterminado. Alto risco de paixão permanente.

IMPORTANTE: Esta missão não tem prazo para expirar.

Boa sorte, Agente. A Agência conta com você.

💋 Fim da transmissão.`;

  // Efeito de digitação
  useEffect(() => {
    if (show && text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [text, show]);

  return (
    <div className="secret-message-container">
      {!show ? (
        <button className="secret-button" onClick={() => setShow(true)}>
          📡 Nova Missão Recebida
        </button>
      ) : (
        <div className="secret-terminal">
          <pre>{text}</pre>
        </div>
      )}
    </div>
  );
}
