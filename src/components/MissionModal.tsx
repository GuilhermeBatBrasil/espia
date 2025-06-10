import "../styles/MissionModal.css";

type Mission = {
  id: number;
  title: string;
  desc: string;
  image: string;
  message?: string;
};

interface Props {
  mission: Mission;
  onClose: () => void;
}

export default function MissionModal({ mission, onClose }: Props) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="scanner-bar" />
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>{mission.title}</h2>
        <img src={mission.image} alt={mission.title} />
        <p><strong>Descrição:</strong> {mission.desc}</p>
        <p><strong>Código:</strong> AGT-{mission.id.toString().padStart(3, "0")}</p>
        {mission.message && (
          <p className="secret-note">
            💌 {mission.message}
          </p>
)}
      </div>
    </div>
  );
}
