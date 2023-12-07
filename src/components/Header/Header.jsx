import Nav from "../Nav/Nav";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header_wrap">
      <Link to="/"><img src={logo} alt="" /></Link>
      <Nav />
    </div>
  );
}
