import { useState } from "react";
import BookClub from "../components/BookClub";
import CodingClub from "../components/CodingClub";
import ChatBox from "../components/ChatBox";

export const Club = () => {
  const [activeTab, setActiveTab] = useState("bookClub");
  const [chatContext, setChatContext] = useState({
    isOpen: false,
    title: "",
    messages: [],
  });

  const handleJoinDiscussion = (title) => {
    setChatContext({
      isOpen: true,
      title: `${title} Discussion`,
      messages: [
        {
          id: 1,
          text: `Welcome to the ${title} discussion!`,
          sender: "Moderator",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
        {
          id: 2,
          text: "What are your thoughts about this?",
          sender: "Moderator",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ],
    });
  };

  const handleJoinProject = (title) => {
    setChatContext({
      isOpen: true,
      title: `${title} Team Chat`,
      messages: [
        {
          id: 1,
          text: `You've joined the ${title} project team!`,
          sender: "Team Lead",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
        {
          id: 2,
          text: "Let's discuss our next steps",
          sender: "Team Lead",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ],
    });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#6f4e37] mb-2">
          Cafesynca Clubs
        </h1>
        <p className="text-lg text-gray-600">
          Join our vibrant community of coffee enthusiasts and tech lovers
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="flex space-x-1 rounded-xl bg-[#f5f5f5] p-1">
          <button
            className={`py-3 px-6 rounded-lg font-medium transition-colors ${
              activeTab === "bookClub"
                ? "bg-[#6f4e37] text-white shadow"
                : "text-gray-500 hover:bg-[#e5d5c9]"
            }`}
            onClick={() => setActiveTab("bookClub")}
          >
            ☕ Book Club
          </button>
          <button
            className={`py-3 px-6 rounded-lg font-medium transition-colors ${
              activeTab === "codingClub"
                ? "bg-[#6f4e37] text-white shadow"
                : "text-gray-500 hover:bg-[#e5d5c9]"
            }`}
            onClick={() => setActiveTab("codingClub")}
          >
            💻 Coding Club
          </button>
        </div>
      </div>

      <div className="mb-12">
        {activeTab === "bookClub" ? (
          <BookClub onJoinDiscussion={handleJoinDiscussion} />
        ) : (
          <CodingClub onJoinProject={handleJoinProject} />
        )}
      </div>

      <ChatBox
        isOpen={chatContext.isOpen}
        onClose={() => setChatContext({ ...chatContext, isOpen: false })}
        title={chatContext.title}
        initialMessages={chatContext.messages}
      />
    </div>
  );
};
