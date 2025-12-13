
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 md:h-16">
          {/* 로고 */}
          <div className="flex items-center">
            <span className="text-xl md:text-2xl font-black text-gray-800" style={{ fontFamily: 'Gothic, sans-serif' }}>
              코코바둑
            </span>
          </div>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors cursor-pointer"
            >
              홈
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors cursor-pointer"
            >
              특징
            </button>
            <button 
              onClick={() => scrollToSection('instructor')}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors cursor-pointer"
            >
              강사소개
            </button>
            <button 
              onClick={() => scrollToSection('curriculum')}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors cursor-pointer"
            >
              커리큘럼
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors cursor-pointer"
            >
              수강료
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors cursor-pointer"
            >
              후기
            </button>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap">
              체험수업 신청
            </button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-600 transition-colors cursor-pointer"
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                홈
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                특징
              </button>
              <button 
                onClick={() => scrollToSection('instructor')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                강사소개
              </button>
              <button 
                onClick={() => scrollToSection('curriculum')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                커리큘럼
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                수강료
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                후기
              </button>
              <div className="px-4 py-2">
                <button className="w-full bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap">
                  체험수업 신청
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
