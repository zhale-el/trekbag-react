import { useState } from "react";
import { initialItems } from "../lib/constants";

const ItemList = () => {
  const [items, setItems] = useState(initialItems);

  return (
    <ul>
      {items.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default ItemList;

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input checked={item.packed} type="checkbox" />
        {item.name}
      </label>
      <button>❌</button>
    </li>
  );
}
