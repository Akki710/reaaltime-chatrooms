import React from 'react';
import { userName } from '../../Join/Join';

import './Message.css';





const Message = ({message:{text,user}}) => {
  const username=userName.trim().toLowerCase();
  if(user !== username && user === 'Admin'){
    return(
      <div className="messageContainer justifyCenter">
      <div className="messageBoxadmin backgroundgray">
        <p className="messageTextforadmin">{` ${text}`}</p>
      </div>
    </div>
    )
  }
  else if(user === username && user !== 'Admin'){
    return(
      <div className="messageContainer justifyEnd">
      <div className="messageBoxforme backgroundgreen">
        <p className="messageTextforme">{text}</p>
      </div>
    </div>
    )
  }
  else if(user !== username && user!== 'Admin'){
    return(
      <div className="messageContainer justifyStart">
            <div className="messageBoxforuser backgroundgray">
            <p className="sentText">{user}</p>
              <p className="messageTextforuser">{text}</p>
            </div>
      </div>
    )
  }
}
export default Message;
