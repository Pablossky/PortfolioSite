import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutPage, GalleryPage, HomePage, MusicPage, GraphicPage, LanguagePage, MusicProductionPage, TechnologyPage, NotFound } from "./Pages";
import { MainLayout } from "./Layout";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./main.css";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainLayout/>}>
          <Route path="/PortfolioSite" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/music" element={<MusicPage/>} />
          <Route path="/gallery" element={<GalleryPage/>} />
          <Route path="/about/graphic" element={<GraphicPage/>} />
          <Route path="/about/language" element={<LanguagePage/>} />
          <Route path="/about/musicproduction" element={<MusicProductionPage/>} />
          <Route path="/about/technology" element={<TechnologyPage/>} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
