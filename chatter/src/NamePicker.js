import {useState} from 'react';
import './App.css';
import { FiEdit2, FiUser} from "react-icons/fi";
import React from "react";

function NamePicker(props) {
    const [editName, setEditName] = useState(false)
    const [name, setName] = useState("")

    function save() {
        props.save(name)
        setEditName(false)   
      }
    
    function onKeyPress(e) {
    if (e.key === "Enter") {
        save()
    }
    }

    if (editName) {
        return <div className = "User">
          <input 
            className = "UserInput"
            value = {name}
            onChange = {e => setName(e.target.value)}
            onKeyPress = {onKeyPress}
          />
          <button className = "SaveUser" onClick = {save}>Complete</button>
        </div>
      } else {
        return (
          <div className = "User">
            <FiUser />
            <div>{name}</div>
            <button className = "Edit" onClick = {()=>setEditName(true)}>
              <FiEdit2 />
            </button>
          </div>
        )
    }
}

export default NamePicker