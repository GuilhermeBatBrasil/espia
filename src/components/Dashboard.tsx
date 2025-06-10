import "../styles/Dashboard.css";
import SecretMessage from "./SecretMessage";

const missions = [
  { id: 1, title: "Missão 001", desc: "Operação Charme Infiltrado", image: "/img1.png" },
  { id: 2, title: "Missão 002", desc: "Missão Estilo Impecável", image: "/img2.jpg" },
  { id: 3, title: "Missão 003", desc: "Rastreando Corações", image: "/img3.jpg" },
  { id: 4, title: "Missão 004", desc: "A Arte da Sedução", image: "/img4.jpg" },
  { id: 5, title: "Missão 005", desc: "O Enigma do Amor", image: "/img5.jpg" },
  { id: 6, title: "Missão 006", desc: "O Código do Coração", image: "/img6.jpg" }
];

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h2 className="agent-name">Agente Secreta: Juju Araujo</h2>
      <div className="missions">
        {missions.map((mission) => (
          <div className="mission-card" key={mission.id}>
            <img src={mission.image} alt={mission.title} />
            <h3>{mission.title}</h3>
            <p>{mission.desc}</p>
          </div>
        ))}
      </div>
      <SecretMessage />
    </div>
  );
}
