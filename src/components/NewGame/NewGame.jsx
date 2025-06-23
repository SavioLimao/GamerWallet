import { useState } from "react";
import "./NewGame.css";

// Nome
export default function NewGame(props) {
  const [NName, setNName] = useState("");
  const [NPrice, setNPrice] = useState("");
  const [NDat, setNDat] = useState(new Date().toISOString().split("T")[0]);

  const NameChangeHandler = (event) => {
    setNName(event.target.value);
  };

  // Valor
  const PriceChangeHandler = ({ target }) => {
    Number(setNPrice(target.value));
  };

  //   Data

  const DatChangeHandler = (event) => {
    setNDat(event.target.value);
  };

  //   Submit

  const SubmitHandler = (event) => {
    event.preventDefault();
    if (!NName.trim() || !NPrice || !NDat) {
      alert("Todos os campos são obrigatórios");
      return;
    } else {
      const GameData = {
        Name: NName,
        Price: NPrice,
        Dat: new Date(NDat),
      };
      // console.log(GameData)
      props.onSavaNewGame(GameData);
      setNDat(new Date().toISOString().split("T")[0]);
      setNName("");
      setNPrice("");
    }
  };

  return (
    <>
      <div className="NewGame">
        <form onSubmit={SubmitHandler}>
          <div className="NewGameIn">
            <div className="NewGameIn">
              <label>Nome</label>
              <input
                type="text"
                placeholder="Nome do Jogo"
                value={NName}
                onChange={NameChangeHandler}
              />
            </div>
            <div className="NewGameIn">
              <label>Valor</label>
              <input
                type="number"
                placeholder="100.00"
                min="0.0"
                step="0.01"
                value={NPrice}
                onChange={PriceChangeHandler}
              />
            </div>
            <div className="NewGameIn">
              <label>Data</label>
              <input
                type="date"
                placeholder="2025/01/01"
                min="2023-01-01"
                value={NDat}
                onChange={DatChangeHandler}
              />
            </div>
            <div className="NewGameACT">
              <button type="submit">{props.btnConfirm}</button>
              {props.btnCancel && (
                <button type="submit">{props.btnCancel}</button>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
