import React, { useState, useEffect, useRef} from "react";
import { io } from "socket.io-client";
import './chat.css';  

function Chat() {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState("");
    const [user, setUser] = useState("Usuário");

    const socketRef = useRef(null);

    useEffect(() => {
        socketRef.current = io("http://localhost:3700/chat");
        
        socketRef.current.on('receiveMessage', (messageData) => {
            setMessages((prevMessages) => [...prevMessages, messageData]);
        });
        

        return () => {
            socketRef.current.disconnect();
        };
    }, []);

    
    function sendMessage (event) {
        event.preventDefault();
        
        const messageData = {
            text: messageInput,
            user: user,
            timestamp: new Date().toISOString(),
        };

        socketRef.current.emit("sendMessage", messageData); 

        setMessageInput(""); 
    };

    return (
        <div className="chat-room">
            <div className="chat-header">
                <h3>Chat</h3>
            </div>
            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div key={index} className="message">
                        <strong>{message.user}:</strong> {message.text} <span>{new Date(message.timestamp).toLocaleTimeString()}</span>
                    </div>
                ))}
            </div>
            <form onSubmit={sendMessage} className="chat-input">
                <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Escreva uma mensagem..."
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Chat;