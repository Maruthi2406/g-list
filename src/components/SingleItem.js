export default function SingleItem({ item, dItem }) {
  console.log(typeof dItem);
  return (
    <div className="item">
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
