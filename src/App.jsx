import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FilmMain from "./components/FilmMain";
// // import FilmList from './components/FilmList'
// // import FilmCard from './components/FilmCard'
// import SearchBar from './components/Searchbar'
import Footer from "./components/Footer";
import FullDetails from "./components/FullDetails";

function App() {
  const [count, setCount] = useState(0);

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
