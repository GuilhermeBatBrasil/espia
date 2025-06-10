import "../styles/IntroScreen.css";

export default function IntroScreen({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="intro-screen">
      <h1 className="intro-title">🔒 Acesso Restrito – Base Secreta da Espiã</h1>
      <button className="intro-button" onClick={onEnter}>
        ENTRAR NA BASE
      </button>
    </div>
  );
}
