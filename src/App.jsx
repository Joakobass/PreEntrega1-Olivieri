import "./App.css";
import { Navbar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer title="Bienvenidos a Tukson Growshop" />
    </>
  );
}

export default App;
