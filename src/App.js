import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AddItem } from "./components/AddItem";
import "./App.css";
import { ItemList } from "./components/ItemList";

function App() {
  return (
    <div>
      <Header />
      <AddItem />
      <ItemList />
      <Footer />
    </div>
  );
}

export default App;
