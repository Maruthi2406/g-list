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
  function dItem(id) {
    setItems((items) => {
      return items.filter((item) => item.id !== id);
    });
  }
  function selectedItem(id) {
    setItems((items) => {
      return items.map((item) => {
        return item.id === id ? { ...item, selected: !item.selected } : item;
      });
    });
  }

  return (
    <div>
      <Header />
      <AddItem up={addItem} />
      <ItemList items={items} dItem={dItem} selectedItem={selectedItem} />
      <Footer />
    </div>
  );
}

export default App;
