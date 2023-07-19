import ClonedSites from "./pages/ClonedSites";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import MiniProjects from "./pages/MiniProjects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/clonedsites" element={<ClonedSites />} />
        <Route path="/miniprojects" element={<MiniProjects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
