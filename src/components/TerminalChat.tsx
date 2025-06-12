import { useEffect, useState } from "react";
import "../styles/TerminalChat.css";

const messages = [
  "🟢 Iniciando conexão segura...",
  "🔐 Acesso autorizado.",
  "📡 Mensagem criptografada detectada...",
  "✨ Agente Secreta localizada.",
  "💌 Agente G: Desde o primeiro olhar, sua missão era me conquistar.",
  "💬 Agente G: E agora, você é minha missão mais especial.",
  "❤️ Agente G: Prepare-se para as missões mais romântica da sua vida.",
];

export default function TerminalChat({ onComplete }: { onComplete: () => void }) {
  const [visibleMessages, setVisibleMessages] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < messages.length) {
      const timeout = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, messages[index]]);
        setIndex((prev) => prev + 1);
      }, 1800);
      return () => clearTimeout(timeout);
    } else {
      // Quando todas as mensagens foram exibidas
      const doneTimeout = setTimeout(() => {
        onComplete();
      }, 2000); // espera 2s depois da última
      return () => clearTimeout(doneTimeout);
    }
  }, [index, onComplete]);

  return (
    <div className="terminal-chat">
      {visibleMessages.map((msg, i) => (
        <p key={i} className="terminal-line">{msg}</p>
      ))}
      {index < messages.length && <span className="terminal-cursor">█</span>}
    </div>
  );
}
