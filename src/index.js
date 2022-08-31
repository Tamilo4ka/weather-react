import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./App.css";
import SearchEngine from "./Search";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App text-center">
      <div className="container mt-5">
        <h1>Weather App</h1>
        <SearchEngine />
        <h2 id="weather">{""}</h2>
      </div>
    </div>
    <small>
      {" "}
      <a
        href="https://github.com/Tamilo4ka/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        Open-sourced on GitHub{" "}
      </a>
      by Tamila{" "}
    </small>
  </StrictMode>
);
