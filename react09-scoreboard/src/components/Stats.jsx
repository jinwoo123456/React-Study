import React from "react";

export default function Stats(props) {
  //플레이어수 : 객체형 배열의 크기를 통해서 얻어옴.
  let playersCount = props.playersData.length;

  //점수 총합. prev의 초기값은 0으로 설정 후 curr의 점수를 누적해서 더해줌.
  let totalPoint = props.playersData.reduce((prev, curr) => {
    console.log(`${curr.name} 점수 ${curr.score}`); 
    prev += curr.score; // 누적값에 현재 플레이어의 점수를 더함
    return prev; // 누적된 값을 반환
  }, 0); //초기값 0으로 설정
  return (
    <>
      <table className="stats">
        <tbody>
          <tr>
            <td>Players:</td>
            <td>{playersCount}</td>
          </tr>
          <tr>
            <td>Total Points:</td>
            <td>{totalPoint}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
