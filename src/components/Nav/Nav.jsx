import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav_wrap">
      <ul>
        <Link to="/"><li>Accueil</li></Link>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </div>
  );
}
