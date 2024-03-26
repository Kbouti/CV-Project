import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

import { ContactInfo } from "./components/contactInfo.jsx";
import { Education } from "./components/education.jsx";
import { Experience } from "./components/experience.jsx";
import { MainOutput } from "./components/output.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainOutput />
    <ContactInfo />
    <Education />
    <Experience />
  </React.StrictMode>
);
