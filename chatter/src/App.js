import logo from './logo.svg';
import Header from "./Header.js"
import "./App.css";
import TextInput from "./TextInput";
import { useState } from "react";
import Message from "./Message";
import Camera from 'react-snap-pic';
import { use100vh } from "react-div-100vh";

//{showCamera && <Camera takePicture={takePicture} />} whole screen turns white for some reason

function App() {
  const height = use100vh()
  let [messages, setMessages] = useState([]);
  const [showCamera, setShowCamera] = useState(false);
  // Function runs when send button is clicked
  function sendMessage(text) {
    if (!text.trim()) return;
    // New message object
    const newMessage = {
      text: text,
      time: Date.now(),
      user: "Kenny",
    };
    // Set "messages" to an be an array to append new to old messages
    setMessages([newMessage, ...messages]);
  }

  /*takePicture = (img) => {
    console.log(img)
    setShowCamera(false)
  } whole screen turns white for some reason. */

  // Re-runs after every state change
  console.log(messages);

  function takePicture(img) {
    console.log(img)
    setShowCamera(false)
  }

  return (
    <div className="App" style = {{height : height}}>
      {showCamera && <Camera takePicture={takePicture} />}
      <Header/>
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