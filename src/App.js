import React from "react";
import Dictionary from "./Dictionary";

export default function App() {
  console.log("► App rendering");
  return <Dictionary defaultKeyword="sunset" />;
}
