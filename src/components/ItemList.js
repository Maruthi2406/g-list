import SingleItem from "./SingleItem";

export function ItemList({ items, dItem, selectedItem }) {
  const total = items.reduce((accum, item) => {
    return (accum = accum + item.price * item.quantity);
  }, 0);
  if (!items.length)
    return <h3 style={{ textAlign: "center" }}>Please add items</h3>;
  return (
    <div>
      <h3>Items List</h3>
      {items.map((item) => (
        <SingleItem
          item={item}
          key={item.id}
          dItem={dItem}
          selectedItem={selectedItem}
        />
      ))}
      <div className="total"> Total:Rs{total} </div>
    </div>
  );
}
