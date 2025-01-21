import { useState } from "react";
import Navigation from "@/components/Navigation";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const properties = [
  {
    name: "84A 타입",
    type: "전용 84㎡",
    image: "/lovable-uploads/ff3c5312-2abc-47f5-a697-0f756ee91d6e.png",
    description: "채광이 뛰어난 4베이 혁신 평면",
    url: "#",
  },
  {
    name: "84B 타입",
    type: "전용 84㎡",
    image: "/lovable-uploads/266b0d6b-29a7-4f4d-b1f9-2cb87be07bf4.png",
    description: "실용적인 구조의 판상형 평면",
    url: "#",
  },
  {
    name: "59 타입",
    type: "전용 59㎡",
    image: "/lovable-uploads/5eb4aa63-7866-4ead-88fa-2acc4226817b.png",
    description: "효율적인 공간 활용의 스마트 평면",
    url: "#",
  },
];

const Index = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast({
        title: "입력 오류",
        description: "성함과 연락처를 모두 입력해주세요.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "방문예약 완료",
      description: "담당자가 확인 후 연락드리겠습니다.",
    });
    setName("");
    setPhone("");
  };

  return (
    <div className="min-h-screen font-[Pretendard]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=3840"
            alt="Hero"
            className="w-full h-full object-cover"
          />
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

      {/* Properties Section */}
      <section id="properties" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            타입안내
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.name} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-12">입지환경</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-bold">편리한 교통망</h3>
              <p className="text-gray-600">
                2개의 지하철 노선이 교차하는 더블역세권과
                수도권 제1순환고속도로를 통한 빠른 광역 접근성
              </p>
              <h3 className="text-2xl font-bold">풍부한 생활 인프라</h3>
              <p className="text-gray-600">
                대형마트, 백화점, 병원, 학교 등
                완성된 생활 인프라 보유
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl animate-slide-up">
              <img
                src="/lovable-uploads/ff3c5312-2abc-47f5-a697-0f756ee91d6e.png"
                alt="Location"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visit Reservation Section */}
      <section id="about" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
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
                  placeholder="연락처"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="text-lg"
                />
              </div>
              <Button type="submit" className="w-full text-lg py-6">
                방문예약 신청하기
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;