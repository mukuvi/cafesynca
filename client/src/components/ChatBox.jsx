import { useState, useEffect, useRef } from "react";

const ChatBox = ({ isOpen, onClose, title, initialMessages }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        text: newMessage,
        sender: "You",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");

      setTimeout(() => {
        const responseMsg = {
          id: messages.length + 2,
          text: getRandomResponse(title),
          sender: title.includes("Discussion") ? "Book Fan" : "Team Member",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, responseMsg]);
      }, 1000);
    }
  };

  const getRandomResponse = (context) => {
    const discussionResponses = [
      "I loved that book too! The chapter about brewing techniques was amazing.",
      "Has anyone tried the methods mentioned in chapter 3?",
      "The author's perspective on coffee origins was eye-opening!",
    ];

    const projectResponses = [
      "I can work on the API endpoints this week.",
      "Let's schedule a pair programming session for the UI components.",
      "I found a useful library we could integrate for the mapping feature.",
    ];

    const responses = context.includes("Discussion")
      ? discussionResponses
      : projectResponses;
    return responses[Math.floor(Math.random() * responses.length)];
  };

  useEffect(() => {
    setMessages(initialMessages);
  }, [initialMessages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-10 w-80 h-[500px] bg-white rounded-t-lg shadow-xl flex flex-col border border-gray-200">
      <div
        className="bg-[#6f4e37] text-white p-4 rounded-t-lg flex justify-between items-center cursor-pointer"
        onClick={onClose}
      >
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="text-xs opacity-80">{messages.length} messages</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <div className="flex-1 p-4 overflow-y-auto bg-[#f9f6f0]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`mb-3 ${
              msg.sender === "You" ? "text-right" : "text-left"
            }`}
          >
            {msg.sender !== "You" && (
              <div className="text-xs font-semibold text-[#6f4e37] mb-1">
                {msg.sender} • <span className="text-gray-500">{msg.time}</span>
              </div>
            )}
            <div
              className={`inline-block p-3 rounded-lg max-w-xs ${
                msg.sender === "You"
                  ? "bg-[#6f4e37] text-white rounded-br-none"
                  : "bg-white text-gray-800 rounded-bl-none shadow-sm"
              }`}
            >
              {msg.text}
            </div>
            {msg.sender === "You" && (
              <div className="text-xs text-gray-500 mt-1">{msg.time}</div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-3 border-t bg-white flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type a message..."
          className="flex-1 border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring-1 focus:ring-[#6f4e37]"
        />
        <button
          onClick={handleSend}
          className="bg-[#6f4e37] text-white px-4 rounded-r-lg hover:bg-[#5a3d2a] transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
