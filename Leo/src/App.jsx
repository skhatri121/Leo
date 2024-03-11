import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutusPage from "./Pages/AboutusPage";
import ClubPage from "./Pages/ClubPage";
import ResourcesPage from "./Pages/ResourcesPage";
import PhotoGalleryPage from "./Pages/PhotoGalleryPage";
import VideoGalleryPage from "./Pages/VideoGalleryPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutusPage />} />
        <Route path="/club" element={<ClubPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/gallery/photo" element={<PhotoGalleryPage />} />
        <Route path="/gallery/video" element={<VideoGalleryPage />} />
      </Routes>
    </>
  );
}

export default App;
