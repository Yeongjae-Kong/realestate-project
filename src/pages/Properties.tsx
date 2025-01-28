// src/pages/Properties.tsx
import React, {useState} from 'react';
import Navigation from "@/components/Navigation";

const Properties = () => {
  const [activeTab, setActiveTab] = useState("community"); // State for active tab

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
            <source
              src="/videos/background.mp4"
              type="video/mp4"
            />
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
          onClick={() => setActiveTab("community")}
          className={`px-4 py-2 rounded shadow-lg ${activeTab === "community" ? 'bg-[rgba(0,31,63,1)] text-white' : 'bg-white'} hover:shadow-xl`}
        >
          커뮤니티
        </button>
        <button
          onClick={() => setActiveTab("layout")}
          className={`px-4 py-2 rounded shadow-lg ${activeTab === "layout" ? 'bg-[rgba(0,31,63,1)] text-white' : 'bg-white'} hover:shadow-xl`}
        >
          동호수배치도
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "community" && (
        <div className="py-20 bg-white">
          <div className="flex justify-center items-center h-full">
            <img
              src="/tab1/community.png" // 이미지 경로를 여기에 입력하세요
              alt=""
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
      {activeTab === "layout" && (
        <div className="py-20 bg-white">
          <div className="flex justify-center items-center h-full">
            <img
              src="/tab1/layout.png" // 이미지 경로를 여기에 입력하세요
              alt=""
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default Properties;