import { useEffect, useState } from "react";
import "../styles/TerminalChat.css";

const messages = [
  "Conectando à base secreta...",
  "Acesso autorizado.",
  "Mensagem codificada recebida...",
  "Agente Secreta, sua missão começa agora.",
  "💬 Agente X: Estou infiltrado no seu coração desde o primeiro sorriso.",
  "💬 Agente X: Prepare-se, esta será a missão mais apaixonante da sua vida. ❤️",
];

export default function TerminalChat() {
  const [visibleMessages, setVisibleMessages] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < messages.length) {
      const timeout = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, messages[index]]);
        setIndex(index + 1);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="terminal">
      {visibleMessages.map((msg, i) => (
        <p key={i}>{msg}</p>
      ))}
    </div>
  );
}
