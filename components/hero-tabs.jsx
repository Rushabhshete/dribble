"use client";
import React, { useState } from "react";

export default function HeroTabs() {
  const [activeTab, setActiveTab] = useState("shots");
  const tabData = {
    shots: {
      placeholder: "What type of design are you interested in?",
      popular: ["dashboard", "landing page", "e-commerce", "logo"],
    },
    designers: {
      placeholder: "Search designers by name or skill",
      popular: ["App design", "landing page", "web design"],
    },
    services: {
      placeholder: "What service are you looking for?",
      popular: ["branding", "Logo design", "mobile app"],
    },
  };
  return (
    <div>
      <div className="space-x-8 ">
        {["shots", "designers", "services"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`font-semibold rounded-3xl py-2 px-5 
        ${activeTab === tab ? "bg-black text-white" : "hover:bg-gray-400"}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="">
        <input
          type="text"
          placeholder={tabData[activeTab].placeholder}
          className="bg-gray-200 py-3.5 px-8 my-3 w-xl rounded-3xl border-pink-400 hover:border-2 hover:bg-white"
        />
      </div>

      <div className="space-x-2">
        <span className="font-semibold">Popular:</span>
        {tabData[activeTab].popular.map((item) => (
          <button
            key={item}
            className="px-2  py-1  rounded-3xl bg-white hover:bg-gray-300 text-sm border-1 "
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
