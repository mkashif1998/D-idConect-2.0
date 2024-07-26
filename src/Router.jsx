import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsCondtion from "./pages/TermsCondtion";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/terms-condition" element={<TermsCondtion /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
