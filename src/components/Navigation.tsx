import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '단지안내', href: '/properties' },
    { name: '세대안내', href: '/location' },
    { name: '방문예약', href: '/reservation' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <a 
          href="/" 
          className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-foreground' : 'text-white'
          }`}
          style={{ fontFamily: 'Pretendard' }}
        >
          힐스테이트 도안리버파크
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link // <a> 대신 <Link> 사용
              key={link.name}
              to={link.href} // href 대신 to 사용
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-foreground hover:text-primary/80' : 'text-white hover:text-white/80'
              }`}
              style={{ fontFamily: 'Pretendard' }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              className={`${!isScrolled && 'text-white hover:text-white/80'}`}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-8">
              {navLinks.map((link) => (
                <Link // Use Link instead of a
                  key={link.name}
                  to={link.href} // Use to instead of href
                  onClick={() => setIsOpen(false)} // Close the sheet on click
                  className="text-lg font-medium hover:text-primary/80 transition-colors"
                  style={{ fontFamily: 'Pretendard' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;