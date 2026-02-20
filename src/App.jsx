import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FilmMain from "./components/FilmMain";
import Footer from "./components/Footer";
import FullDetails from "./components/FullDetails";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<FilmMain />} />
          <Route path="/details/:id" element={<FullDetails />} />
        </Routes>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;
