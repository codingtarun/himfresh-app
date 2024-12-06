export const Button = ({ children }) => {
  return (
    <button type="submit" className="btn btn-primary my-3 w-100 fw-bold">
      {children}
    </button>
  );
};
