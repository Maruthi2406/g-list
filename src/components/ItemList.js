import SingleItem from "./SingleItem";

export function ItemList({ items }) {
  const total = items.reduce((accum, item) => {
    return (accum = accum + item.price * item.quantity);
  }, 0);
  if (!items.length)
    return <h3 style={{ textAlign: "center" }}>Please add items</h3>;
  return (
    <div>
      <h3>Items List</h3>
      {items.map((item) => (
        <SingleItem item={item} key={item.id} />
      ))}
      <div className="total"> Total:{total} </div>
    </div>
  );
}
