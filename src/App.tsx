import { HashRouter, Routes, Route } from "react-router-dom";
import MainSection from "./components/MainSection/MainSection";
import "./components/MainSection/mainSection.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainSection />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
