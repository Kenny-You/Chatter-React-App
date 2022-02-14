import "./App.css";
import TextInput from "./TextInput";
import { useState } from "react";
import Message from "./Message";
import Camera from 'react-snap-pic';
import { use100vh } from "react-div-100vh";
import NamePicker from "./NamePicker.js";
import { useDB, db} from "./db";

//{showCamera && <Camera takePicture={takePicture} />} whole screen turns white for some reason

function App() {
  const height = use100vh()

  const messages = useDB();
  // grab the key "name" locally, initially Guest 1 from NamePicker
  // const [user, setUsername] = useState("");
  let [user, setUsername] = useState(
    localStorage.getItem('name') || "Guest 1" // set default user to Guest 1 before login
  );
  const [showCamera, setShowCamera] = useState(false);
  // Function runs when send button is clicked
  function sendMessage(text) {
    if (!text.trim()) return;
    // New message object
    const newMessage = {
      text: text,
      time: Date.now(),
      user: user,
    };
    // Set "messages" to an be an array to append new to old messages
    db.send(newMessage);
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
    <div
      className="App"
      style={{ height: height, minHeight: height, maxHeight: height }}
    >
      {showCamera && <Camera takePicture={takePicture} />}
      <header className="header">
        <div className="logo" />
        <span className="title">ChitChat</span>
        <NamePicker setUsername={setUsername} />
      </header>
      <div className="messages">
        {messages.map((msg, i) => {
          return <Message {...msg} key={i} fromMe={msg.user === user}/>;
        })}
      </div>
      <TextInput sendMessage={sendMessage} />
    </div>
  );
}

export default App;