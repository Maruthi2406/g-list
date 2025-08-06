export default function SingleItem({ item, dItem, selectedItem }) {
  console.log(typeof dItem);
  return (
    <div className="item">
      <div style={{ flex: "0.1" }}>
        <input
          type="checkbox"
          checked={item.selected}
          onChange={() => selectedItem(item.id)}
        />
      </div>
      <div>{item.name}</div>
      <div>{item.quantity}</div>
      <div>Rs{item.price}</div>
      <div>Rs{item.price * item.quantity}</div>
      <div className="close" onClick={() => dItem(item.id)}>
        X
      </div>
    </div>
  );
}
