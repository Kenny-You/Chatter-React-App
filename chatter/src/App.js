import logo from './logo.svg';
import './App.css';
import "./App.css";
import TextInput from "./TextInput";
import { useState } from "react";
import Message from "./Message";

function App() {
  const [messages, setMessages] = useState([]);
  function sendMessage(text) {
    const newMessage = {
      text,
      time: Date.now(),
      user: "Kenny",
    };
    setMessages([newMessage, ...messages]);
  }
  console.log(messages);
  return (
    <div className="App">
      <header className="header">
        <div className="logo"></div>
        <span className="title">ChitChat</span>
      </header>
      <div className="messages">
          {messages.map((msg) => {
            return <Message {...msg}/>;
          })}
      </div>
      <TextInput sendMessage={sendMessage}/>
    </div>
  );
}

export default App;