import Nav from "../Nav/Nav";
import logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <div className="header_wrap">
      <img src={logo} alt="" />
      <Nav />
    </div>
  );
}
