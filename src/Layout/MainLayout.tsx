import { Outlet } from "react-router-dom";

import "./MainLayout.css";
import { Footer, Navigation } from "./components";

const divElement = document.querySelector('div');
if (divElement) {
  divElement.style.backgroundColor = "#F2F2F2";
}

export const MainLayout = () => {
    return ( 
    <> 
        <Navigation />
        <Outlet />
        <Footer />
    </>
    );
}