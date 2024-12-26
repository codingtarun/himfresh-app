import { Menu } from "../components/menu/Menu";

export const Default = (props) => {
  return (
    <div>
      {props.children}
      <Menu></Menu>
    </div>
  );
};
