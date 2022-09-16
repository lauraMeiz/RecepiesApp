import "./App.css";
import "./Crud.scss";
import Search from "./Components/Search";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Favorite from "./Components/Favorite";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        {/* <div className="choices"> */}
        <h1 className="title">Recepies</h1>
        <div className="choices">
          <Link to="/favorite">Yours Favorite</Link>
          <Link to="/search">Search</Link>
        </div>
        <Routes>
          <Route path="/Recepies" element={<Search></Search>}></Route>
          <Route path="/search" element={<Search></Search>}></Route>

          <Route
            className="btnFavorite"
            path="/favorite"
            element={<Favorite></Favorite>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
