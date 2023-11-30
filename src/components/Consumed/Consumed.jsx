import apple from "../../assets/apple.svg";

export default function Consumed() {
  return (
    <div className="consumed_wrap">
      <div className="consumed_wrap_icon"><span className="consumed_wrap_icon_asset"><img src={apple} alt="" /></span></div>
        <div className="consumed_text">
          <h2>250 KCal</h2>
          <p>Calories</p>
        </div>
    </div>
  );
}
