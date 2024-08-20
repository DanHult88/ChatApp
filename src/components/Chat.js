import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { storage } from '../firebase'; // Adjust this path if needed

const socket = io('http://localhost:5000');

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState('YOUR_USER_ID'); // Replace with actual user ID from authentication

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('message', { userId, message });
      setMessage('');
    }
  };

  const addEmoji = (e) => {
    let emoji = e.native;
    setMessage(message + emoji);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.name);
      await fileRef.put(file);
      const fileUrl = await fileRef.getDownloadURL();
      socket.emit('message', { userId, message: fileUrl });
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.userName}</strong>: {msg.message}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input 
          type="text" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder="Type a message..." 
        />
        <button type="submit">Send</button>
        <input type="file" onChange={handleFileUpload} />
      </form>
      <Picker onSelect={addEmoji} />
    </div>
  );
};

export default Chat;
