import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AddItem } from "./components/AddItem";
import "./App.css";
import { ItemList } from "./components/ItemList";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems((items) => [...items, item]);
  }
  return (
    <div>
      <Header />
      <AddItem up={addItem} />
      <ItemList items={items} />
      <Footer />
    </div>
  );
}

export default App;
