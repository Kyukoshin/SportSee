export default function Title( {name}) {
  return (
    <div className="title_wrap">
      <div className="title_line"><h1>Bonjour </h1><h1>{name}</h1></div>
      <div className="title_catch">Félicitations ! Vous avez explosé vos objectifs hier 👏</div>
    </div>
  );
}
