import { useState } from "react";
export function AddItem() {
  const [name, setName] = useState("Milk");
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState(0);

  return (
    <>
      <div>
        <h3>Add Item</h3>
      </div>
      <form className="add-item">
        <div>
          <label>Item Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Quantity:</label>
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.quantity)}
          >
            <option>choose form option</option>
            {Array.from({ length: 10 }, (_, k) => k + 1).map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
            {/*<option>1</option>
            <option>2</option>
            <option>3</option>*/}
          </select>
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.price)}
          />
        </div>

        <div>
          <button className="btn">Add Item</button>
        </div>
      </form>
    </>
  );
}
