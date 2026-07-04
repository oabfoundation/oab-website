"use client";

import React, { useState } from "react";
import GeneralMember from "./GeneralMember";
import Team from "./Team";
import Leader from "./Leader";

const TABS = {
  GENERAL_MEMBER: "general-member",
  BOARD_OF_DIRECTOR: "board-of-director",
  LEADER: "leader",
};

export default function MembersTabContainer() {
  const [activeTab, setActiveTab] = useState(TABS.BOARD_OF_DIRECTOR); // Board of Director as recommended default

  const handleTabChange = (e) => {
    setActiveTab(e.target.value);
  };

  return (
    <div className="w-full">
      {/* Tab Switcher Header */}
      <div className="flex flex-col items-center mb-8">
        {/* Mobile Dropdown Selector */}
        <div className="w-full max-w-xs md:hidden">
          <label htmlFor="tab-select" className="sr-only">
            Select Member Category
          </label>
          <select
            id="tab-select"
            value={activeTab}
            onChange={handleTabChange}
            className="w-full py-3 px-4 bg-white border border-slate-200 rounded-xl text-slate-800 font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          >
            <option value={TABS.BOARD_OF_DIRECTOR}>Board of Director</option>
            <option value={TABS.LEADER}>Our Leader</option>
            <option value={TABS.GENERAL_MEMBER}>General Member</option>
          </select>
        </div>

        {/* Desktop Tab Selector */}
        <div className="hidden md:flex items-center p-1 bg-slate-100/80 rounded-2xl border border-slate-200/50 backdrop-blur-sm shadow-inner">
          <button
            onClick={() => setActiveTab(TABS.BOARD_OF_DIRECTOR)}
            className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
              activeTab === TABS.BOARD_OF_DIRECTOR
                ? "bg-white text-orange-600 shadow-md font-bold"
                : "text-slate-600 hover:text-slate-800"
            }`}
          >
            Board of Director
          </button>
          <button
            onClick={() => setActiveTab(TABS.LEADER)}
            className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
              activeTab === TABS.LEADER
                ? "bg-white text-orange-600 shadow-md font-bold"
                : "text-slate-600 hover:text-slate-800"
            }`}
          >
            Our Leader
          </button>
          <button
            onClick={() => setActiveTab(TABS.GENERAL_MEMBER)}
            className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
              activeTab === TABS.GENERAL_MEMBER
                ? "bg-white text-orange-600 shadow-md font-bold"
                : "text-slate-600 hover:text-slate-800"
            }`}
          >
            General Member
          </button>
        </div>
      </div>

      {/* Render Active Tab Content with subtle fade-in transition */}
      <div className="transition-opacity duration-300 ease-in-out">
        {activeTab === TABS.BOARD_OF_DIRECTOR && <Team />}
        {activeTab === TABS.LEADER && <Leader />}
        {activeTab === TABS.GENERAL_MEMBER && <GeneralMember />}
      </div>
    </div>
  );
}
