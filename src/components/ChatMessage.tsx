import React from 'react';
import { Message } from '../types/chat';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.sender === 'bot';
  
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`max-w-[70%] rounded-lg px-4 py-2 ${
        isBot ? 'bg-purple-100' : 'bg-blue-100'
      }`}>
        {isBot && (
          <div className="text-sm text-purple-600 font-semibold mb-1">
            Shivani
          </div>
        )}
        <p className="text-gray-800">{message.text}</p>
        {message.language && (
          <div className="text-xs text-gray-500 mt-1">
            {message.language}
          </div>
        )}
      </div>
    </div>
  );
};