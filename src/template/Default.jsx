import { Menu } from "../components/menu/Menu";

export const Default = (props) => {
  return (
    <div>
      <h1>Default Content</h1>
      {props.children}
      <Menu></Menu>
    </div>
  );
};
