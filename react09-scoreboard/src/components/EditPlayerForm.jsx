import React, { useState } from "react";

//컴포넌트의 선언과 동시에 export 할 수 있다.
export default function EditPlayerForm(props) {
  if (!props.playerData) {
    return <div>Loading...</div>;
  }

  let row = props.playerData;
  const [playerName, setPlayerName] = useState(row.name);

  return (
    <>
      <form
        className="form"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          // Event 객체를 통해 입력값을 얻어옴
          let playerName = e.target.playerName.value;
          // 부모에서 전달된 함수를 호출하여 플레이어 추가
          props.onEditPlayer(props.playerIdx, playerName);
          props.setShowEdit(false);
        }}
      >
        <input
          type="text"
          name="playerName"
          minLength="10"
          className="input"
          placeholder="이름을 변경하세요"
          required
          value={playerName}
          onChange={(e) => {
            setPlayerName(e.target.value);
          }}
        />
        <input type="submit" className="input" value="Edit" />
      </form>
    </>
  );
}
