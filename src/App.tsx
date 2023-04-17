import { HashRouter, Routes, Route } from "react-router-dom";
import { AboutPage, GalleryPage, HomePage, MusicPage, GraphicPage, LanguagePage, MusicProductionPage, TechnologyPage, NotFound } from "./Pages";
import { MainLayout } from "./Layout";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./main.css";

function App() {
  return (
    <>
      <HashRouter>
      <Routes>
          <Route path="/" element={<MainLayout/>}>
          <Route path="/PortfolioSite/" element={<HomePage/>} />
          <Route path="/PortfolioSite/about" element={<AboutPage/>} />
          <Route path="/PortfolioSite/music" element={<MusicPage/>} />
          <Route path="/PortfolioSite/gallery" element={<GalleryPage/>} />
          <Route path="/PortfolioSite/about/graphic" element={<GraphicPage/>} />
          <Route path="/PortfolioSite/about/language" element={<LanguagePage/>} />
          <Route path="/PortfolioSite/about/musicproduction" element={<MusicProductionPage/>} />
          <Route path="/PortfolioSite/about/technology" element={<TechnologyPage/>} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
      </HashRouter>
    </>
  );
}

export default App;
