import yoga from "../../assets/yoga.svg";
import swim from "../../assets/swim.svg";
import bike from "../../assets/bike.svg";
import dumbell from "../../assets/dumbell.svg";

export default function Sidebar() {
  return (
    <div className="sidebar_wrap">
      <div className="sidebar_wrap_icons">
        <span className="icon_wrap">
          <img src={yoga} alt="" />
        </span>
        <span className="icon_wrap">
          <img src={swim} alt="" />
        </span>
        <span className="icon_wrap">
          <img src={bike} alt="" />
        </span>
        <span className="icon_wrap">
          <img src={dumbell} alt="" />
        </span>
      </div>
      <p>Copyright, SportSee 2020</p>
    </div>
  );
}
