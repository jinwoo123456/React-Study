import React, { useState } from "react";
import Counter from "./Counter";
import EditPlayerForm from "./EditPlayerForm";

export default function Player(props) {
  let row = props.playerData;
  const [showEdit, setShowEdit] = useState(false);
  let editForm;

  if (showEdit === false) {
    editForm = "";
  } else {
    editForm = (
      <EditPlayerForm
        playerName={row.name}
        playerIdx={row.idx}
        onEditPlayer={props.onEditPlayer}
        showEdit={showEdit}
        setShowEdit={setShowEdit}
      />
    );
  }
  return (
    <>
      <div className="player">
        <span className="player-name">
          <button
            className="remove-player"
            onClick={() => {
              if (confirm("선수를 삭제하시겠습니까?"))
                props.deletePlayerProcess(row.idx);
            }}
          >
            {" "}
            x{" "}
          </button>

          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              setShowEdit(!showEdit);
            }}
          >
            {row.name}
          </a>
        </span>
        <Counter
          idx={row.idx}
          score={row.score}
          onChangeScore={props.onChangeScore}
        />
      </div>
      {editForm}
    </>
  );
}
