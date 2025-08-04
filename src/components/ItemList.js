import SingleItem from "./SingleItem";

export function ItemList({ items }) {
  return (
    <div>
      <h3>Items List</h3>
      {items.map((item) => (
        <SingleItem item={item} key={item.id} />
      ))}
    </div>
  );
}
