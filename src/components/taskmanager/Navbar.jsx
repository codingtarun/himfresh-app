export const Navbar = ({ theme, setTheme }) => {
  return (
    <div
      className={`${
        theme === "dark" ? "text-light" : "text-dark"
      } header d-flex w-100 justify-content-between align-items-center my-4 border shadow-sm p-3`}
    >
      <h5>Task Manager</h5>
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          id="switchTheme"
          onClick={() =>
            setTheme((theme) => (theme === "light" ? "dark" : "light"))
          }
        />
        <label class="form-check-label" for="switchTheme">
          {theme === "dark" ? (
            <i class="fa-regular fa-sun"></i>
          ) : (
            <i class="fa-regular fa-moon"></i>
          )}
        </label>
      </div>
    </div>
  );
};
