import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      This project was coded by Ilona and is open-sourced on{" "}
      <a
        href="https://github.com/placeholder"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>{" "}
      and hosted on{" "}
      <a
        href="https://vercel.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vercel
      </a>.
    </footer>
  );
}
