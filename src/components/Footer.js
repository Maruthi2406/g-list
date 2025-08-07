export function Footer({ items }) {
  if (items.length === 0) {
    return (
      <div className="footer">
        No items are avaiable.Please fill the items in list.
      </div>
    );
  }

  const selectedItems = items.filter((item) => item.selected).length;

  const totalPrice = items.reduce((accu, item) => {
    return accu + item.quantity * item.price;
  }, 0);

  const selectedPrice = items.reduce((accu, item) => {
    if (item.selected) return accu + item.quantity * item.price;
    return accu;
  }, 0);

  return (
    <div className="footer">
      <div>
        Total Items Added is <i>{items.length}</i> and Price is RS{" "}
        <i>{totalPrice}</i>
      </div>
      <div>
        {" "}
        Items Selected is <i> {selectedItems} </i> and Price is RS{" "}
        <i>{selectedPrice} </i>
      </div>
    </div>
  );
}
