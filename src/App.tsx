import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Management from "./pages/Management";
import Gallery from "./pages/Gallery";
import FlapEEG from "./pages/FlapEEG";
import MangaAI from "./pages/MangaAI";
import F1Tenth from "./pages/F1Tenth";
import Lenia from "./pages/Lenia";
import DecisionTree from "./pages/DecisionTree";
import Projects from "./pages/Projects";
import Collaboration from "./pages/Collaboration";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import JoinUs from "./pages/JoinUs";

function App() {
  return (
    <Router>
      <div className="bg-white/100 dark:bg-black dark:via-red-800/20 min-h-screen dark:bg-gradient-to-b dark:from-black dark:to-black">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/management" element={<Management />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/flapeeg" element={<FlapEEG />} />
          <Route path="/mangaai" element={<MangaAI />} />
          <Route path="/f1tenth" element={<F1Tenth />} />
          <Route path="/decisiontree" element={<DecisionTree />} />
          <Route path="/lenia" element={<Lenia />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/collaboration" element={<Collaboration />} />
          <Route path="/join-us" element={<JoinUs />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
