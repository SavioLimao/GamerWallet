import "./GamesFilter.css"
export default function GamesFilter() {
  return (
    <>
      <div className="filtercontainer">
        <h2>Filtro</h2>
        <select className="yrFilter">
          <option value="" selected disabled>
            Selecione uma opção
          </option>
          <option value="yr25">2025</option>
          <option value="yr24">2024</option>
          <option value="yr23">2023</option>
          <option value="yr23">2022</option>
          <option value="yr23">2021</option>
          <option value="yr23">2020</option>
          <option value="yr23">2019</option>
          <option value="yr23">2018</option>
          <option value="yr23">2017</option>
          <option value="yr23">2016</option>
          <option value="yr23">2015</option>
          <option value="yr23">2014</option>
          <option value="yr23">2013</option>
          <option value="yr23">2012</option>
          <option value="yr23">2011</option>
        </select>
      </div>
    </>
  );
}
