export const Player = ({ name, symbol, isActive }) => {
  return (
    <div className="col-6">
      <div class="input-group mb-3">
        <span class="input-group-text">
          <i class="fa-solid fa-pen-to-square"></i>
        </span>
        <input
          type="text"
          class="form-control"
          aria-label="Amount (to the nearest dollar)"
          value={name}
        />
        <span class="input-group-text fw-bold">{symbol}</span>
      </div>
    </div>
  );
};
