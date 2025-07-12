import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
      <a href="https://github.com/kromer52" target="_blank"> Ilona</a>,
      code hosted on
      <a href="https://github.com/kromer52/react-add-on" target="_blank"> GitHub </a>
      and website hosted on
      <a href="https://react-add-on.vercel.app/" target="_blank"> Vercel </a></footer>

      </div>
    </div>
  );
}