import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutPage, GalleryPage, HomePage, MusicPage, NotFound } from "./Pages";
import { MainLayout } from "./Layout";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./main.css";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
