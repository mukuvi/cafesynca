import { useState } from "react";

import ChatBox from "../components/ChatBox";
import BookClub from "../components/BookClub";
import CodingClub from "../components/CodingClub";
export const Club = () => {
  const [activeTab, setActiveTab] = useState("bookClub");

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-dark mb-8">Cafesynca Clubs</h1>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === "bookClub"
              ? "text-primary border-b-2 border-primary"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("bookClub")}
        >
          Book Club
        </button>
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === "codingClub"
              ? "text-primary border-b-2 border-primary"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("codingClub")}
        >
          Coding Club
        </button>
      </div>

      {/* Tab Content */}
      <div className="mb-8">
        {activeTab === "bookClub" ? <BookClub /> : <CodingClub />}
      </div>

      {/* Chat Box */}
      <ChatBox />
    </div>
  );
};
