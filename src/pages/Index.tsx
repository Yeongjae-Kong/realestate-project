import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { FaHome, FaBuilding, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import '../index.css'; // Ensure this is imported if not already

const properties = [
  {
    name: "84A 타입",
    type: "전용 84㎡",
    image: "/images/84a.png",
    description: "채광이 2베 이상 뛰어난 혁신형 타입",
    url: "#",
  },
  {
    name: "84B 타입",
    type: "전용 84㎡",
    image: "/images/84b.png",
    description: "실용적인 구조의 판상형 타입",
    url: "#",
  },
  {
    name: "59 타입",
    type: "전용 59㎡",
    image: "/images/59c.png",
    description: "효율적인 공간 활용의 스마트형 타입",
    url: "#",
  },
];

const Index = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const { toast } = useToast();
  const sectionsRef = useRef([]); // 섹션 참조를 위한 useRef 추가
  const propertiesRef = useRef(null); // 타입안내 섹션 참조
  const [fadeInCards, setFadeInCards] = useState([]); // 카드들 n초 간격으로 fadein 위한 state
  const [timer, setTimer] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [IsSection1Visible, setIsSection1Visible] = useState(false); // section 애니메이션 상태 추가
  const [IsSection2Visible, setIsSection2Visible] = useState(false);
  const [IsSection3Visible, setIsSection3Visible] = useState(false);
  const [isFloatingButtonVisible, setIsFloatingButtonVisible] = useState(false); // Floating button visibility state
  const [fadeInElements, setFadeInElements] = useState([false, false, false, false]); // State for fade-in elements
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [isFadeIn, setIsFadeIn] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isPrivacyPolicyVisible, setIsPrivacyPolicyVisible] = useState(false); // State for privacy policy visibility
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State for popup visibility

  const images = [
    '/images/slider1.png',
    '/images/slider2.png',
    '/images/slider3.png',
    '/images/slider4.png'
  ];

  // type section fadein
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // fadeInCards 상태 초기화
          setFadeInCards([]); // 이전 카드 상태 초기화
          
          properties.forEach((_, index) => {
            setTimeout(() => {
              setFadeInCards((prev) => [...prev, index]); // 각 카드 인덱스를 추가
            }, 100 + index * 500); // 각 카드에 대해 1초 간격으로 지연
          });
        }
      });
    });

    if (propertiesRef.current) {
      observer.observe(propertiesRef.current);
    }

    return () => {
      if (propertiesRef.current) {
        observer.unobserve(propertiesRef.current); // 해제
      }
    };
  }, []);

  // 카드 슬라이딩, 3초 간격
  useEffect(() => {
    const newTimer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    setTimer(newTimer);

    return () => clearInterval(newTimer); // 컴포넌트 언마운트 시 타이머 해제
  }, []);

  const getSlideIndex = (index) => {
    return (index + images.length) % images.length;
  };

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

  const resetSliderTimer = () => {
    clearInterval(timer); // 기존 타이머 해제
    const newTimer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    setTimer(newTimer); // 새로운 타이머 설정
  };

  const handleScroll1 = () => {
    const element = document.getElementById('section1'); // "section1" 섹션의 ID를 사용, 해당 위치에 스크롤이 도착하면 동작
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsSection1Visible(true); // 애니메이션 상태 업데이트
      } else {
        setIsSection1Visible(false); // 화면 벗어날만큼 스크롤 시 애니메이션 초기화
      }
    }
  };

  const activefloating = () => {
    const element = document.getElementById('slider'); // "section2" 섹션의 ID를 사용, 해당 위치에 스크롤이 도착하면 동작
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= -4000) {
        setIsFloatingButtonVisible(true); // Floating button visible
      } else {
        setIsFloatingButtonVisible(false); // Floating button hidden
      }
    }
  };

  const handleScroll2 = () => {
    const element = document.getElementById('section2'); // "section1" 섹션의 ID를 사용, 해당 위치에 스크롤이 도착하면 동작
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= -2000) {
        setIsSection2Visible(true); // 애니메이션 상태 업데이트
      } else {
        setIsSection2Visible(false); // 화면 벗어날만큼 스크롤 시 애니메이션 초기화
      }
    }
  };

  const handleScroll3 = () => {
    const element = document.getElementById('section3'); // "section2" 섹션의 ID를 사용, 해당 위치에 스크롤이 도착하면 동작
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsSection3Visible(true); // Floating button visible
      } else {
        setIsSection3Visible(false); // Floating button hidden
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll1);
    return () => {
      window.removeEventListener('scroll', handleScroll1);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', activefloating);
    return () => {
      window.removeEventListener('scroll', activefloating);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll2);
    return () => {
      window.removeEventListener('scroll', handleScroll2);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll3);
    return () => {
      window.removeEventListener('scroll', handleScroll3);
    };
  }, []);
  // section1 글 애니메이션
  useEffect(() => {
    const timeouts = fadeInElements.map((_, index) => {
      return setTimeout(() => {
        setFadeInElements((prev) => {
          const newFadeIn = [...prev];
          newFadeIn[index] = true; // Set the current index to true for fade-in
          return newFadeIn;
        });
      }, 800 + index * 300); // 0.6 seconds interval
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout)); // Clear timeouts on cleanup
    };
  }, []);

  const handleCardClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadeIn(true);
    }, 2000); // 2초 후에 fade-in 시작

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  const handleAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: function(data) {
        // 사용자가 선택한 주소 정보를 address 상태에 저장
        const fullAddress = data.address; // 기본 주소
        setAddress(fullAddress);
      },
    }).open();
  };

  const handleSelectAddress = (selectedAddress) => {
    setAddress(selectedAddress);
    setSearchResults([]); // 검색 결과 초기화
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up the script on unmount
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddressSearch(); // Call the address search function when Enter is pressed
    }
  };

  return (
    <div className="min-h-screen font-[Pretendard]">
      <Navigation />
      
      {/* Hero Section */}
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

      {/* Introduction Section */}
      <section
        id="section1"
        className="py-40 relative"
        style={{ backgroundImage: "url('/images/222.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-white opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className={`text-3xl md:text-3xl font-bold mb-4 text-red-800 ${fadeInElements[0] ? 'fade-in' : 'opacity-0'}`}>BRAND PHILOSOPHY</h2>
          <h3 className={`text-4xl md:text-5xl font-semibold mb-4 text-gray-800 ${fadeInElements[1] ? 'fade-in' : 'opacity-0'}`}>라이프스타일 리더 힐스테이트</h3>
          <p className={`text-lg md:text-xl text-black-600 ${fadeInElements[2] ? 'fade-in' : 'opacity-0'}`}>
            대한민국 라이프스타일을 주도해 온 현대건설(주)은 단순한 주거공간을 넘어
          </p>
          <p className={`text-lg md:text-xl text-black-600 ${fadeInElements[3] ? 'fade-in' : 'opacity-0'}`}>
            새로운 라이프스타일을 창조하는 '라이프스타일 리더'로 거듭나고자 합니다.
          </p>
        </div>
        <motion.div
          className="section1-tag"
          initial={{ opacity: 0, x: window.innerWidth < 768 ? -130 : window.innerWidth*0.15, y: 130}} // 왼쪽에서 시작
          animate={IsSection1Visible ? { opacity: 1, x: window.innerWidth < 768 ? -10 : window.innerWidth*0.2, y: 130 } : { opacity: 0, x: window.innerWidth < 768 ? -130 : window.innerWidth*0.15, y: 130}} // 애니메이션
          transition={{ duration: 2 }}
        >
          조감도
        </motion.div>
        {/* Image Slider Section */}
        <section id="slider" className={`py-40 ${isFadeIn ? 'fade-in' : 'opacity-0'}`} style={{ overflow: 'hidden' }}>
          <div className="container mx-auto px-4">
            <div className="relative h-[420px] max-w-full mx-auto overflow-visible">
              <div className="absolute w-full">
                {[-1, 0, 1].map((offset) => {
                  const slideIndex = getSlideIndex(currentIndex + offset);
                  return (
                    <div
                      key={slideIndex}
                      className={`absolute h-[420px] transition-all duration-300 ease-in-out
                        ${offset === -1 ? 'left-[-25%] w-[50%]' : ''} 
                        ${offset === 0 ? 'left-[22.5%] w-[55%] z-10' : ''} 
                        ${offset === 1 ? 'left-[75%] w-[50%]' : ''} 
                        hover:brightness-110 cursor-pointer`}
                      style={{
                        transform: `
                          ${offset === 0 ? 'translateY(-20px) scale(1.1)' : 'scale(0.9)'}
                        `,
                        boxShadow: '0 4px 15px rgba(255, 215, 0, 0.2)', // 기본 황금색 그림자
                      }}
                    >
                      <img
                        src={images[slideIndex]}
                        alt={`Slide ${slideIndex + 1}`}
                        className={`w-full h-full object-cover rounded-lg shadow-lg ${isVisible ? 'fade-in' : ''}`}
                        style={{
                          transition: 'box-shadow 0.3s ease-in-out',
                        }}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="absolute w-full flex justify-center items-center z-10" style={{ bottom: '200px' }}>
                <button
                  onClick={() => {
                    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
                    resetSliderTimer();
                  }}
                  className="bg-transparent rounded-full p-4 shadow-lg hover:bg-gray-200 transition"
                  style={{ marginRight: '15vw' }}
                >
                  <span style={{ fontSize: '2rem' }}>&#10094;</span>
                </button>
                <button
                  onClick={() => {
                    setCurrentIndex((prev) => (prev + 1) % images.length);
                    resetSliderTimer();
                  }}
                  className="bg-transparent rounded-full p-4 shadow-lg hover:bg-gray-200 transition"
                  style={{ marginLeft: '15vw' }}
                >
                  <span style={{ fontSize: '2rem' }}>&#10095;</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section id="slider2" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="/videos/interior.mp4"
              type="video/mp4"
            />
            {/* 브라우저에서 동영상 지원 하지 않을 시 */}
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative text-center text-white space-y-6 max-w-3xl px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            편안하고 아늑한
          </motion.h1>
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            고품격 인테리어
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            리모델링이 필요없는 고품격 인테리어로 당신의 삶을 더욱 가치있게
          </motion.p>
        </div>
      </section>

      {/* Section2 */}
      <section id="section2" className="py-40 bg-white" ref={propertiesRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-32">
            타입안내
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" style={{ transform: 'scale(1)' }}>
            {properties.map((property, index) => (
              <div
                key={property.name}
                className={`transition-opacity duration-1000 ${fadeInCards.includes(index) ? 'fade-in' : 'opacity-0'}`}
                onClick={() => handleCardClick(property.image)}
              >
                <PropertyCard {...property} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section3 */}
      <section id="section3" className="py-40 bg-blue-900 bg-opacity-30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-32">입지환경</h2>
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
              <h3 className="text-2xl font-bold">깨끗한 자연 환경</h3>
              <p className="text-gray-600">
                아름다운 공원과 산책로가 인근에 위치하여, 여유로운 자연을 즐길 수 있는 최적의 환경
              </p>
            </div>
            <motion.div
              className="rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 50 }} // 오른쪽에서 시작
              animate={IsSection3Visible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} // 애니메이션
              transition={{ duration: 1.5 }} // 애니메이션 지속 시간
            >
              <img
                id="your-image-id"
                src="/images/map.png"
                alt="Location"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visit Reservation Section */}
      <section id="section4" className="py-60 bg-white">
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
                    onKeyDown={handleKeyDown}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-lg"
                    required
                  />
                </div>
              </div>
              <form className="p-2">
                {/* Personal Information Consent */}
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
                  <p className="text-black-500">
                  </p>
                  {isPrivacyPolicyVisible && (
                    <textarea
                      className="mt-1 block w-full border border-black rounded-md p-2"
                      rows={4}
                      placeholder="회사는 개인정보 보호법 제30조에 따라 정보 주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립, 공개합니다.

제1조 (개인정보의 처리목적)
회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다."
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
            </form>
          </div>
        </div>
      </section>

      {/* 우측 Floating Buttons */}
      <div className={`floating-button-circle ${isFloatingButtonVisible ? 'fade-in' : 'opacity-0'}`} style={{ transition: 'opacity 1.5s' }}>
        <div className="floating-button">
          <ul>
            <li>
              <a href="#" className="text-white">
                <FaHome />
              </a>
              <span>홈</span>
            </li>
            <li>
              <Link to="/properties" className="text-white">
                <FaMapMarkerAlt />
              </Link>
              <span>단지안내</span>
            </li>
            <li>
              <Link to="/location" className="text-white">
                <FaBuilding />
              </Link>
              <span>세대안내</span>
            </li>
            <li>
              <a href="#about" className="text-white">
                <FaCalendarAlt />
              </a>
              <span>방문예약</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img src={selectedImage} alt="Expanded view" className="max-w-full max-h-full" />
            <button onClick={closeModal} className="absolute top-0 right-3 m-4 text-black text-4xl">&times;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;