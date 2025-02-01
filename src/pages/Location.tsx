// src/pages/Location.tsx
import React, { useState } from 'react';
import Navigation from "@/components/Navigation";

const Location = () => {
  const [activeTab, setActiveTab] = useState("interior"); // State for active tab

  return (
    <div className="min-h-screen font-[Pretendard]">
      <Navigation />
      
      {/* Video Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/background.webm" type="video/webm" />
            <source src="/videos/background.mp4" type="video/mp4" />
            {/* 브라우저에서 동영상 지원 하지 않을 시 */}
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative text-center text-white space-y-6 max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
            떠오르는 프리미엄
          </h1>
          <p className="text-xl md:text-2xl animate-slide-up">
            주거 공간, 그 이상의 라이프스타일
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="flex justify-center space-x-2 py-12">
        <button
          onClick={() => setActiveTab("interior")}
          className={`px-4 py-2 rounded shadow-lg ${activeTab === "interior" ? 'bg-[rgba(0,31,63,1)] text-white' : 'bg-white'} hover:shadow-xl`}
        >
          인테리어
        </button>
        <button
          onClick={() => setActiveTab("type")}
          className={`px-4 py-2 rounded shadow-lg ${activeTab === "type" ? 'bg-[rgba(0,31,63,1)] text-white' : 'bg-white'} hover:shadow-xl`}
        >
          타입안내
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "interior" && (
        <div className="py-20 bg-white">
          <div className="flex justify-center items-center h-full">
            <img
              src="/tab2/interior.png" // 이미지 경로를 여기에 입력하세요
              alt=""
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
      {activeTab === "type" && (
        <div className="py-20 bg-white">
          <div className="flex justify-center items-center h-full">
            <img
              src="/tab2/type.png" // 이미지 경로를 여기에 입력하세요
              alt=""
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;