import React, { useEffect, useState } from 'react';
import { userName } from '../Join/Join';
import { userRoom } from '../Join/Join';
import InfoBar from '../InfoBar/InfoBar';
import Messages from '../Messages/Messages';
import Input from '../Input/Input';
import {io} from 'socket.io-client';


import './Chat.css';

const url='https://chatroomapp-backend.herokuapp.com/';
let socket;




const Chat = () => {

const [users, setUsers] = useState('');
const [name, setname] = useState('');
const [message, setMessage] = useState('');
const [messages, setMessages] = useState([]);

useEffect(() => {
    socket = io(url);
    socket.emit("join", { userName,userRoom }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [url,userName,userRoom]);// eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    socket.on("message",message => {
      setMessages(messages=>[...messages,message]);
      console.log(message.user,message.text);
    });
    socket.on("roomData",({users})=>{
      setUsers(users);
    });
  }, []);

  const sendMessage=(event)=>{
    event.preventDefault();
     setname(message.user);
    if(message){
      socket.emit("sendMessage",message,()=> setMessage(''));
    }
  }

    return (
        <>
        <div>
            <div className='outerContainer'>
                <div className='container'>
                    <InfoBar room={userRoom} users={users}/>
                    <Messages messages={messages} name={name}/>
                    <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
                </div>
            </div>
        </div>
        </>
    );
};

export default Chat;