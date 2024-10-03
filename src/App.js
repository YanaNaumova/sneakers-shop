import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Main from "../src/pages/Main";
import Contacts from "../src/pages/Contacts";
import Cart from "../src/pages/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
