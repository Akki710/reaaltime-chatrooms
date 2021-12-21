import React from 'react';
import onlineIcon from '../../images/onlineIcon.png';

import './InfoBar.css';

const InfoBar = ({room,users}) => {
    return (
        <div className='infoBar'>
            <div id='leftInnerContainer'>
                <img className='onlineIcon' src={onlineIcon} alt="online icon" />
                <h3 className='roomname'>{room}</h3>
                {
          users
            ? 
            (
              <div className='drpcontent'>
                <h1>Users in this Room:</h1>
                <div className="activeContainer">
                  <h2>
                    {users.map(({name}) => (
                      <div key={name} className="activeItem">
                        {name}
                        <img alt="Online Icon" src={onlineIcon}/>
                      </div>
                    ))}
                  </h2>
                </div>
              </div>
            )
            : null
        }
            </div>
            <div className='rightInnerContainer'>
                <a href="/">❌</a>
            </div>
        </div>
    );
};
export default InfoBar;