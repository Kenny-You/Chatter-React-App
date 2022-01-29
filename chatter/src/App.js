import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo"></div>
        <span className="title">ChitChat</span>
      </header>
      <body>
        <div class = "messages">
          <p1>Can I get a waffle? 🧇</p1>
        </div>
      </body>
      <footer className="footer">
        <input className="text-input"></input>
        <button className="send">👆</button>
      </footer>
    </div>
  );
}

export default App;