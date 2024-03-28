import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Mynavbar from "./components/MyNavbar";
import MainArticles from "./components/MainArticles";
import DetailComponent from "./components/DetailComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Mynavbar />
        <Routes>
          <Route path="/" element={<MainArticles />} />
          <Route path="/detail/:id" element={<DetailComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
