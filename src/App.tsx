import "./App.css";
import NewGame from "./components/NewGame/NewGame";
import GameCard from "./components/Games/GameCard";
import { useState, useEffect } from "react";
import GamesFilter from "./components/GamesFilter/GamesFilter.jsx";
import GameChart from "./components/Chart/GameChart.jsx";
import DeletBTN from "./components/DeleteBTN/DeleteBTN";

const InitGames = [
  {
    id: "01",
    Name: "Postal 2",
    Dat: new Date(2023, 7, 14),
    Price: 24.99,
  },
  {
    id: "02",
    Name: "Cyberpunk 2077",
    Dat: new Date(2025, 11, 10),
    Price: 199.9,
  },
  {
    id: "03",
    Name: "The Witcher 3",
    Dat: new Date(2024, 4, 19),
    Price: 79.99,
  },
  {
    id: "04",
    Name: "Red Dead Redemption 2",
    Dat: new Date(2024, 9, 26),
    Price: 249.99,
  },
  {
    id: "05",
    Name: "Stardew Valley",
    Dat: new Date(2023, 1, 26),
    Price: 24.99,
  },
];
function App() {
  const [games, setGames] = useState(() => {
    const saved = localStorage.getItem("games");
    if (saved) {
      return JSON.parse(saved).map((game) => ({
        ...game,
        Dat: new Date(game.Dat),
      }));
    }
    return InitGames;
  });

  const [slcYear, setSlcYear] = useState("");

  useEffect(() => {
    localStorage.setItem("games", JSON.stringify(games));
  }, [games]);

  const saveNewGameHandler = (newGameData) => {

    setGames([{ ...newGameData, id: (games.length + 1).toString() }, ...games]);
    // console.log(games);
  };

  const filteredGames = slcYear
    ? games.filter((g) => g.Dat.getFullYear().toString() === slcYear)
    : games;

  const DeleteBTNHandler = (id) => {
  if(confirm("Tem certeza que deseja apagar?") == true) {
  setGames((prevGames) => prevGames.filter((g) => g.id !== id))
} else {return}
  };

  return (
    <>
    <div className="title-container">
      <h1 className="title">Gamer Wallet</h1>
    </div>
    <h2>Seu controle de finanças gamer</h2>
      <NewGame onSavaNewGame={saveNewGameHandler} btnConfirm="Adicionar Game" />
      <GamesFilter slcYear={slcYear} onChangeYear={setSlcYear} />
      <GameChart Games={filteredGames} />
      {filteredGames.length === 0 ? (
  <p style={{ textAlign: "center" }}>Nenhum jogo encontrado para esse ano.</p>
) : (
  filteredGames.map((g) => (
    <GameCard
      key={g.id}
      Name={g.Name}
      Dat={g.Dat}
      Price={g.Price}
      onClick={() => DeleteBTNHandler(g.id)}
    />
  ))
)}
    </>
  );
}

export default App;
