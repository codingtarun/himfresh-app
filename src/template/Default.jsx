import { Menu } from "../components/menu/Menu";
import { Navbar } from "../components/navbar/Navbar";

export const Default = (props) => {
  return (
    <div>
      <Navbar></Navbar>
      {props.children}
      <Menu></Menu>
    </div>
  );
};
