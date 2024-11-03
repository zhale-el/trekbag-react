import AddItemForm from "./AddItemForm";
import ButtonGrop from "./ButtonGrop";

const Sidebar = ({ setItems }) => {
  return (
    <div className="sidebar">
      <AddItemForm setItems={setItems} />
      <ButtonGrop />
    </div>
  );
};

export default Sidebar;
