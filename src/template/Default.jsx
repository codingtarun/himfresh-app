import { useState } from "react";
import { Menu } from "../components/menu/Menu";
import { Navbar } from "../components/navbar/Navbar";

export const Default = (props) => {
  const [theme, setTheme] = useState("dark");
  return (
    <div
      className={`bg-${theme} ${
        theme === "dark" ? "text-light" : "text-dark"
      } min-vh-100`}
    >
      <Navbar theme={theme} setTheme={setTheme}></Navbar>
      {props.children}
      <Menu></Menu>
    </div>
  );
};
