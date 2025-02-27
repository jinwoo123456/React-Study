import React from "react";
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

export default function Header(props) {
  return (
    <>
      <header className="header">
        <Stats playersData={props.playersData} />
        <h1 className="h1">{props.title}</h1>
        <Stopwatch></Stopwatch>
      </header>
    </>
  );
}
