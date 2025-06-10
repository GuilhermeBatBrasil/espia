import { useState } from "react";
import "../styles/Dashboard.css";
import SecretMessage from "./SecretMessage";
import MissionModal from "./MissionModal";

const missions = [
  {
    id: 1,
    title: "Missão 001",
    desc: "Operação Charme Infiltrado",
    image: "/img1.png",
    message: "Essa missão foi inspirada no seu jeitinho encantador de sempre chegar iluminando tudo ao redor. ❤️"
  },
  {
    id: 2,
    title: "Missão 002",
    desc: "Missão Estilo Impecável",
    image: "/img2.jpg",
    message: "Não existe agente com mais estilo no planeta. Cada look seu deveria estar em um dossiê secreto de moda. 💅"
  },
  {
    id: 3,
    title: "Missão 003",
    desc: "Rastreando Corações",
    image: "/img3.jpg",
    message: "Você capturou meu coração com um só olhar... e agora ele é seu para sempre. 💘"
  },
  {
    id: 4,
    title: "Missão 004",
    desc: "A Arte da Sedução",
    image: "/img4.jpg",
    message: "Ninguém domina a arte da sedução como você. Missão cumprida com louvor. 😘"
  },
  {
    id: 5,
    title: "Missão 005",
    desc: "O Enigma do Amor",
    image: "/img5.jpg",
    message: "Você é meu enigma favorito — e a cada dia descubro um novo motivo pra te amar. 🔍❤️"
  },
  {
    id: 6,
    title: "Missão 006",
    desc: "O Código do Coração",
    image: "/img6.jpg",
    message: "Decifrei o código do seu sorriso e ele me leva direto à felicidade. 💻💕"
  }
];


type Mission = { id: number; title: string; desc: string; image: string };

export default function Dashboard() {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);

  return (
    <div className="dashboard">
      <h2 className="agent-name">Agente Secreta: Juju Araujo</h2>

      <div className="missions">
        {missions.map((mission) => (
          <div
            className="mission-card"
            key={mission.id}
            onClick={() => setSelectedMission(mission)}
          >
            <img src={mission.image} alt={mission.title} />
            <h3>{mission.title}</h3>
            <p>{mission.desc}</p>
          </div>
        ))}
      </div>

      <SecretMessage />

      {selectedMission && (
        <MissionModal
          mission={selectedMission}
          onClose={() => setSelectedMission(null)}
        />
      )}
    </div>
  );
}
