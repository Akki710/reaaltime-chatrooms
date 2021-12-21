import React from 'react';
import sendLogo from '../../images/sendicon.png';


import './Input.css';

const Input = ({ setMessage,sendMessage,message }) => {
    return (
        <form className='form'>
            <input
            className='input'
            type="text" 
            placeholder='Type a message....'
            value={message}
            onChange={({target:{value} })=> setMessage(value)}
            onKeyPress={event=> event.key === 'Enter' ? sendMessage(event) : null}
            />
            <button onClick={e => sendMessage(e)} className="sendButton"><img src={sendLogo} alt="Send" /></button>
        </form>
    )
}

export default Input;