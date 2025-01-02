import { Menu } from "../components/menu/Menu";
import { Navbar } from "../components/navbar/Navbar";

export const Default = ({ children, theme, setTheme }) => {
  return (
    <div
      className={`bg-${theme} ${
        theme === "dark" ? "text-light" : "text-dark"
      } min-vh-100`}
    >
      <Navbar theme={theme} setTheme={setTheme}></Navbar>
      {children}
      <Menu></Menu>
    </div>
  );
};
