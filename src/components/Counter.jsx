const Counter = ({ numberOfItemsPacked, totalNumberOfItems }) => {
  return (
    <div>
      <b>{numberOfItemsPacked}</b> / {totalNumberOfItems} items packed
    </div>
  );
};

export default Counter;
