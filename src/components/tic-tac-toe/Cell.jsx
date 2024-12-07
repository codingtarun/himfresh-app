export const Cell = ({ symbol, cellNo }) => {
  return (
    <div
      className={`tic-tac-toe__box--grid tic-tac-toe__box--grid-${cellNo} O`}
    >
      {symbol}
    </div>
  );
};
