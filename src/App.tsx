import "./App.css";
import NewGame from "./components/NewGame/NewGame";
import GameCard from "./components/Games/GameCard";
import { useState, useEffect } from "react";
import GamesFilter from "./components/GamesFilter/GamesFilter.jsx";
import GameChart from "./components/Chart/GameChart.jsx";

const InitGames = [
  {
    id: "01",
    Name: "Postal 2",
    Dat: new Date(2010, 7, 14),
    Price: Number(24.99).toFixed(2),
  },
  {
    id: "02",
    Name: "Cyberpunk 2077",
    Dat: new Date(2020, 11, 10),
    Price: Number(199.9).toFixed(2),
  },
  {
    id: "03",
    Name: "The Witcher 3",
    Dat: new Date(2015, 4, 19),
    Price: Number(79.9).toFixed(2),
  },
  {
    id: "04",
    Name: "Red Dead Redemption 2",
    Dat: new Date(2018, 9, 26),
    Price: Number(249.9).toFixed(2),
  },
  {
    id: "05",
    Name: "Stardew Valley",
    Dat: new Date(2016, 1, 26),
    Price: Number(24.9).toFixed(2),
  },
];
function App() {
  const [UpdatedGames, setUpdatedGames] = useState(InitGames);

  const SaveNewGameHandler = (NewGameData) => {
    const Game = {
      ...NewGameData,
      id: (UpdatedGames.length + 1).toString(),
    };
    setUpdatedGames([Game, ...UpdatedGames]);
    console.log(UpdatedGames);
  };

  return (
    <>
      <NewGame onSavaNewGame={SaveNewGameHandler} />
      <GamesFilter />
      <GameChart Games={UpdatedGames}/>
      {UpdatedGames.map((Game) => (
        <GameCard
          key={Game.id}
          Name={Game.Name}
          Dat={Game.Dat}
          Price={Game.Price}
        />
      ))}
    </>
  );
}

export default App;
