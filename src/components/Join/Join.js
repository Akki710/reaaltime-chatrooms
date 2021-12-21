import React,{useState} from 'react';
import logo from '../../images/logo.jpg';
import { Link } from 'react-router-dom';

import './Join.css';


let userName;
let userRoom;

const Join = () => {
  const [Name, setName] = useState("");
  const [Room, setRoom] = useState("");
  
  
  const sendUser=()=>{
    userName=document.getElementById('joinInputName').value;
    document.getElementById('joinInputName').value = "";

    userRoom=document.getElementById('joinInputRoom').value;
    document.getElementById('joinInputRoom').value = "";
  }
    return (
        <div className="joinOuterContainer">
          <div className="joinInnerContainer">
            <img src={logo} className="logo" alt="logo" />
            <h1 className="heading">Chat Rooms</h1>
            <div>
              <input onChange={(e)=>setName(e.target.value)} type="text" id='joinInputName' placeholder="Enter username here..."  />
            </div>
            <div>
              <input onChange={(e)=>setRoom(e.target.value)} type="text" id='joinInputRoom' placeholder="Enter Room Name here..." />
            </div>
            <Link onClick={(e)=> (!Name || !Room) ? e.preventDefault():null} to="/chat" ><button className='sendbutton' onClick={sendUser}>Join</button> </Link>
          </div>
        </div>
    );
};

export default Join;
export {userName}
export {userRoom}