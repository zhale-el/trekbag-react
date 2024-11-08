import AddItemForm from "./AddItemForm";
import ButtonGrop from "./ButtonGrop";

import { useItemsContext } from "../lib/hooks";

const Sidebar = () => {
  const { handleAddItem } = useItemsContext();
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />

      <ButtonGrop />
    </div>
  );
};

export default Sidebar;
