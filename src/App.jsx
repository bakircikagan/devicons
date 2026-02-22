import { Routes, Route, Navigate } from "react-router-dom";
import SiteLayout from "./layout/SiteLayout.jsx";

import Home from "./pages/Home.jsx";
import WhoWeAre from "./pages/WhoWeAre.jsx";
import WhatWeDo from "./pages/WhatWeDo.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<Projects />} />

        <Route path="/contact" element={<Contact />} />

        {/* Optional: /home -> / */}
        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
