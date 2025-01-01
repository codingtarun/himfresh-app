import { useState } from "react";
export const Guest = (props) => {
  const [theme, setTheme] = useState("dark");
  return (
    <div
      className={`bg-${theme} ${
        theme === "dark" ? "text-light" : "text-dark"
      } min-vh-100 bg-dark container-fluid d-flex justify-content-center align-items-center min-vh-100 login`}
    >
      {props.children}
    </div>
  );
};
