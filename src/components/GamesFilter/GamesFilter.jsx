import "./GamesFilter.css";
export default function GamesFilter(props) {
  return (
    <>
      <div className="filtercontainer">
        <h2>Filtro</h2>
        <select
          className="yrFilter"
          value={props.slcYear}
          onChange={(e) => props.onChangeYear(e.target.value)}
        >
          <option value={""}>Selecione uma opção</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </>
  );
}
