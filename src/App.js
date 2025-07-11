import logo from './logo.svg';
import './App.css';
import Dictionary from './Dictionary.js';

function App() {
  return (
    <div className="App">
      <div className="container"> 
      <header className="App-header">
        <p>
          Hello </p>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center">Coded by
      <a href="https://github.com/kromer52" target="_blank"> Ilona</a>,
      code hosted on
      <a href="https://github.com/kromer52/react-add-on" target="_blank"> GitHub </a>
      and website hosted on
      <a href="https://react-add-on.vercel.app/" target="_blank"> Vercel </a></footer>
    </div>
    </div>
  );
}

export default App;
