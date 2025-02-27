import React, { useState } from "react";
import AddPlayerForm from "./components/AddPlayerForm";
import Header from "./Header";
import Player from "./Player";
import EditPlayerForm from "/components/EditPlayerForm";

function App() {
  const [playerData, setPlayerData] = useState([
    { idx: 1, name: "Player 1", score: 0 },
    { idx: 2, name: "Player 2", score: 0 },
    // 추가 플레이어 데이터...
  ]);

  const [editPlayerIdx, setEditPlayerIdx] = useState(null);

  const scoreChangeProcess = (operation, idx) => {
    setPlayerData((prevData) =>
      prevData.map((player) =>
        player.idx === idx
          ? {
              ...player,
              score: operation === "+" ? player.score + 1 : player.score - 1,
            }
          : player
      )
    );
  };

  const deletePlayerProcess = (idx) => {
    setPlayerData((prevData) =>
      prevData.filter((player) => player.idx !== idx)
    );
  };

  const editPlayerProcess = (idx, name) => {
    console.log("수정", idx, name);
    let newPlayersData = playerData.map((row) => {
      if (row.idx === idx) {
        row.name = name;
      }
      return row;
    });
    setPlayerData(newPlayersData);
    setEditPlayerIdx(null);
  };

  const addPlayerProcess = (pName) => {
    console.log("onAddPlayer", pName);
    let addPlayer = { idx: playerData.length + 1, name: pName, score: 0 };
    setPlayerData([...playerData, addPlayer]);
  };

  return (
    <div className="scoreboard">
      <Header title="My Scoreboard" playersData={playerData} />
      {playerData.map((playerRow) => (
        <Player
          key={playerRow.idx}
          playerData={playerRow}
          onChangeScore={scoreChangeProcess}
          deletePlayerProcess={deletePlayerProcess}
          onEditPlayer={() => setEditPlayerIdx(playerRow.idx)}
        />
      ))}
      {editPlayerIdx !== null && (
        <EditPlayerForm
          playerData={playerData.find((player) => player.idx === editPlayerIdx)}
          playerIdx={editPlayerIdx}
          onEditPlayer={editPlayerProcess}
          setShowEdit={setEditPlayerIdx}
        />
      )}
      <AddPlayerForm onAddPlayer={addPlayerProcess} />
    </div>
  );
}

export default App;
