import { useState } from "react";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey everyone! What are you reading?", sender: "Alex" },
    { id: 2, text: "Just finished 'The Coffee Recipe Book'!", sender: "Jamie" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: newMessage, sender: "You" },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="fixed bottom-6 right-6">
      {isOpen ? (
        <div className="w-80 bg-white rounded-lg shadow-xl overflow-hidden">
          <div
            className="bg-primary text-white p-3 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <h3 className="font-bold">Club Chat</h3>
          </div>

          <div className="h-64 p-3 overflow-y-auto">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-2 ${
                  msg.sender === "You" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block p-2 rounded-lg ${
                    msg.sender === "You" ? "bg-accent" : "bg-gray-200"
                  }`}
                >
                  {msg.sender !== "You" && (
                    <div className="text-xs font-semibold">{msg.sender}</div>
                  )}
                  <div>{msg.text}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t flex">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 border rounded-l p-2"
            />
            <button
              onClick={handleSend}
              className="bg-primary text-white px-3 rounded-r"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-dark transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ChatBox;
