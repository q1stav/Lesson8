import React from "react";
import { useState } from "react";
import GameFieldContainer from "./components/GameFieldContainer";
import {
  calculateWinner,
  calculateDraw,
} from "./components/InformationContainer";
import InformationContainer from "./components/InformationContainer";
import { store } from "./store";
import {} from "./styles/App.css";

const App = () => {
  const [newField, setNewField] = useState(store.getState());
  const [xIsNext, setXIsNext] = useState(true);
  let winner = calculateWinner();
  let draw = calculateDraw();

  const handleClick = (index) => {
    const fieldCopy = [...store.getState()];
    if (winner || fieldCopy[index]) return;
    if (!draw) return;
    fieldCopy[index] = xIsNext ? "X" : "O";
    store.dispatch({
      type: "NEXT_TURN",
      payload: {
        index: index,
        sim: fieldCopy[index],
      },
    });

    setXIsNext(!xIsNext);
  };

  const startNewGame = () => {
    return (
      <button
        className="startButton"
        onClick={() => {
          setNewField(store.dispatch({ type: "NEW_GAME" }));
          setXIsNext(true);
        }}
      >
        Новая игра
      </button>
    );
  };

  return (
    <div className="App">
      <InformationContainer turn={xIsNext} winner={winner} draw={draw} />
      <GameFieldContainer click={handleClick} />
      {startNewGame()}
    </div>
  );
};

export default App;
