import { Cell } from "./Cell";
import { Player } from "./Player";

export const TicTacToe = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100 tic-tac-toe"
      id="tic-tac-toe"
    >
      <div class="card border-0 shadow">
        <div class="card-body bg-dark">
          <h5 class="card-title text-center fs-2 text-uppercase">
            Tic-Tac-Toe
          </h5>
          <div className="row text-center my-3">
            <Player name="Tarun" symbol="O" isActive={true}></Player>
            <Player name="Hope" symbol="X" isActive={false}></Player>
          </div>
          <div className="tic-tac-toe__box mb-3">
            <Cell cellNo={1} symbol="O"></Cell>
            <Cell cellNo={2} symbol="X"></Cell>
            <Cell cellNo={3} symbol="O"></Cell>
            <Cell cellNo={4} symbol="X"></Cell>
            <Cell cellNo={5} symbol="O"></Cell>
            <Cell cellNo={6} symbol="X"></Cell>
            <Cell cellNo={7} symbol="O"></Cell>
            <Cell cellNo={8} symbol="X"></Cell>
            <Cell cellNo={9} symbol="O"></Cell>
          </div>
        </div>
      </div>
    </div>
  );
};
