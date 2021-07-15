import React from "react";
import "./App.css";

import { Carousel } from "./components/сarousel/Сarousel";
import { Sidebar } from "./components/sidebar/Sidebar";
import { NewsBar } from "./components/newsbar/NewsBar";
import { NewsContent } from "./components/newscontent/NewsContent";

function App() {
  return (
    <main className="layout">
      <Sidebar />
      <NewsBar />
      <div className="block-container">
      <Carousel />
      <NewsContent />
        
      </div>
    </main>
  );
}

export default App;
