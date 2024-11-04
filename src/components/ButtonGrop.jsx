import Button from "./Button";

const ButtonGrop = ({
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsInComplete,
}) => {
  return (
    <section className="button-group">
      <Button buttonType="secondary" onClick={handleMarkAllAsComplete}>
        Mark all as complete
      </Button>
      <Button buttonType="secondary" onClick={handleMarkAllAsInComplete}>
        Mark all as incomplete
      </Button>
      <Button buttonType="secondary" onClick={handleResetToInitial}>
        Reset to initial
      </Button>
      <Button buttonType="secondary" onClick={handleRemoveAllItems}>
        Remove all items
      </Button>
    </section>
  );
};

export default ButtonGrop;
