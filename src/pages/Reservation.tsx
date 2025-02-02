// src/pages/Properties.tsx
import React, {useState} from 'react';
import Navigation from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import reservationImage from '/tab3/reservation.png';
import './reservation.css';
import { supabase } from '@/lib/supabase';

const Reservation = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const { toast } = useToast();
  const [isPrivacyPolicyVisible, setIsPrivacyPolicyVisible] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 빈 입력값 체크
    if (!name || !phone || !address) {
      alert("한글자 이상 입력해주세요.");
      return;
    }
  
    const { data, error } = await supabase
      .from("reservations")
      .insert([{ name, phone, address }]);
  
    if (error) {
      toast({
        title: "예약 실패",
        description: "서버 오류가 발생했습니다. 다시 시도해주세요.",
        variant: "destructive",
      });
      console.error("Supabase Error:", error.message);
    } else {
      toast({
        title: "방문예약 완료",
        description: "담당자가 확인 후 연락드리겠습니다.",
      });
  
      // 입력 필드 초기화
      setName("");
      setPhone("");
      setAddress("");
    }
  };
  
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

      <div className="min-h-screen font-[Pretendard]">
        {/* Visit Reservation Section */}
        <section id="section4" className="py-20 bg-white">
          <div className="container scale-container mx-auto px-4"> {/* Apply the scale-container class */}
            <div className="max-w-xl mx-auto text-center">
              <img
                src={reservationImage}
                alt="Reservation"
                className="w-full h-auto mb-8 animate-fade-in"
              />
              <h2 className="text-3xl md:text-4xl mb-8">방문예약</h2>
              <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
                <div>
                  <Input
                    type="text"
                    placeholder="성함"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-lg"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="연락처 (ex. 010-XXXX-XXXX)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="text-lg"
                  />
                </div>
                <div>
                  <div className="flex items-center">
                    <Input
                      type="text"
                      id="address"
                      placeholder="주소"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-lg"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="consent"
                      className="mr-2"
                      required
                    />
                    <label htmlFor="consent" className="text-sm font-medium text-gray-700">
                      개인정보 수집 및 이용 동의 <span className="text-red-600 cursor-pointer" onClick={() => setIsPrivacyPolicyVisible(!isPrivacyPolicyVisible)}>[보기]</span>
                    </label>
                  </div>
                  {isPrivacyPolicyVisible && (
                    <textarea
                      className="mt-1 block w-full border border-black rounded-md p-2"
                      rows={4}
                      placeholder="회사는 개인정보 보호법 제30조에 따라 정보 주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립, 공개합니다."
                      readOnly
                    />
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                  예약하기
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Reservation;