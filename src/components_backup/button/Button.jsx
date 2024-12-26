import "./button.scss"; // Imporitng SCSS file
export const Button = ({ children }) => {
  return (
    <button
      type="submit"
      id="btn"
      className="btn btn-primary my-3 w-100 fw-bold"
    >
      {children}
    </button>
  );
};
