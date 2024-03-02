import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutusPage from "./Pages/AboutusPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutusPage />} />
      </Routes>
    </>
  );
}

export default App;
