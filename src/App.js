import React from "react";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Dictionary defaultKeyword="sunset" />
      <Footer />
    </div>
  );
}
