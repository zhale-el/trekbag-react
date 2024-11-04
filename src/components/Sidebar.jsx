import AddItemForm from "./AddItemForm";
import ButtonGrop from "./ButtonGrop";

const Sidebar = ({
  handleAddItem,
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsInComplete,
}) => {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />

      <ButtonGrop
        handleRemoveAllItems={handleRemoveAllItems}
        handleResetToInitial={handleResetToInitial}
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarkAllAsInComplete={handleMarkAllAsInComplete}
      />
    </div>
  );
};

export default Sidebar;
