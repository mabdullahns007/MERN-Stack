import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:8000');

function Dashboard(senderId,receiverId) {

 const sendMessage=()=>{
  socket.emit('private_message', { targetUser: "targetUserId", message: "i matched with you " });
 }

  return (
    <div>
      <h1>Private Chat</h1>
      <button onClick={sendMessage}></button>
    </div>
  );
}

export default Dashboard;
