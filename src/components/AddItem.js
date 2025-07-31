import { useState } from "react";
export function AddItem() {
  const [name, setName] = useState("Milk");
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "" || price === "") return;
    const item = { name, quantity, price, id: Date.now() };
    console.log(item);

    setName("");
    setQuantity(1);
    setPrice(0);
  }

  return (
    <>
      <div>
        <h3>Add Item</h3>
      </div>
      <form className="add-item" onSubmit={handleSubmit}>
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
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            <option>choose form option</option>
            {Array.from({ length: 10 }, (_, k) => k + 1).map((value) => (
              <option key={value} value={value}>
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
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>

        <div>
          <button className="btn">Add Item</button>
        </div>
      </form>
    </>
  );
}
