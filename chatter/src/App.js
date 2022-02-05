import logo from './logo.svg';
import './App.css';
import "./App.css";
import TextInput from "./TextInput";
import { useState } from "react";
import Message from "./Message";
import Camera from 'react-snap-pic'

//{showCamera && <Camera takePicture={takePicture} />} whole screen turns white for some reason

function App() {
  let [messages, setMessages] = useState([]);
  function sendMessage(text) {
    if (!text.trim()) return;
    // we'll create a new message object
    const newMessage = {
      text: text,
      time: Date.now(),
      user: "Kenny",
    };
    setMessages([newMessage, ...messages]);
  }

  /*takePicture = (img) => {
    console.log(img)
    setShowCamera(false)
  } whole screen turns white for some reason. */
  console.log(messages);

  return (
    <div className="App">
      <header className="header">
        <div className="logo"></div>
        <span className="title">ChitChat</span>
      </header>
      <div className="messages">
        {messages.map((msg, i) => {
          return <Message {...msg} key={i} />;
        })}
      </div>
      <TextInput sendMessage={text=> props.onSend(text)} 
     showCamera={()=>setShowCamera(true)}/>
    </div>
  );
}

export default App;