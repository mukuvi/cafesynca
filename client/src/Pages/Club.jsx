import { useState } from "react";
import BookClub from "../components/BookClub";
import CodingClub from "../components/CodingClub";
import ChatBox from "../components/ChatBox";

export const Club = () => {
  const [activeTab, setActiveTab] = useState("bookClub");

  return (
    <div className="p-6 max-w-6xl mx-auto min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#6f4e37] mb-2">
          Cafesynca Clubs
        </h1>
        <p className="text-lg text-gray-600">
          Join our vibrant community of coffee enthusiasts and tech lovers
        </p>
      </div>

      {/* Tab Navigation */}
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

      {/* Tab Content */}
      <div className="mb-12">
        {activeTab === "bookClub" ? <BookClub /> : <CodingClub />}
      </div>

      {/* Chat Box - Fixed at bottom right */}
      <ChatBox />
    </div>
  );
};
