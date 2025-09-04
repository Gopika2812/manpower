import { Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import HomecarePage from "./components/HomecarePage";
import ManpowerPage from "./components/ManpowerPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/manpower" element={<ManpowerPage />} />
      <Route path="/homecare" element={<HomecarePage />} />
    </Routes>
  );
}

export default App;
