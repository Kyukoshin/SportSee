import apple from "../../assets/apple.svg";
import cheeseburger from "../../assets/cheeseburger.svg";
import energy from "../../assets/energy.svg";
import chicken from "../../assets/chicken.svg";

export default function Consumed({ index, data }) {
  let name = "";
  let image = "";
  let color = "";
  let unit = "";

  switch (index) {
    case 0:
      name = "Calories";
      image = energy;
      color = "rgb(255 0 0 / 10%)";
      unit = " Kcal"
      break;
    case 1:
      name = "Protéines";
      image = chicken;
      color = "#4AB8FF1A";
      unit = " g"      
      break;
    case 2:
      name = "Glucides";
      image = apple;
      color = "rgb(249 206 35 / 20%)";
      unit = " g"
      break;
    case 3:
      name = "Lipides";
      image = cheeseburger;
      color = "#FD51811A";
      unit = " g"
      break;
    default:
      break;
  }

  return (
    <div className="consumed_wrap">
      <div className="consumed_wrap_icon" style={{ backgroundColor: color }}>
        <span className="consumed_wrap_icon_asset">
          <img src={image} alt={image} />
        </span>
      </div>
      <div className="consumed_text">
        <h2>{data}{unit}</h2>
        <p>{name}</p>
      </div>
    </div>
  );
}
