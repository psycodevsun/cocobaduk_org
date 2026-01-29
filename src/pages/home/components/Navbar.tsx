import { memo, useCallback } from 'react';
import { Button, Icon } from '@/components/ui';
import { useScrollToSection, useMobileMenu } from '@/hooks';
import { MOVE_TOP, NAV_ITEMS, SITE_INFO } from '@/constants';

const Navbar = memo(function Navbar() {
  const scrollToSection = useScrollToSection();
  const { isOpen, toggle, close } = useMobileMenu();

  const handleNavClick = useCallback(
    (sectionId: string) => {
      scrollToSection(sectionId);
      close();
    },
    [scrollToSection, close]
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md" aria-label="메인 네비게이션">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 md:h-16">
          {/* 로고 */}
          <div className="flex items-center">
            <span
              className="text-xl md:text-2xl font-black"
              style={{ fontFamily: 'Gothic, sans-serif' }}
            >
              <Button
                key={MOVE_TOP.id}
                variant="ghost"
                onClick={() => handleNavClick(MOVE_TOP.id)}
                aria-label={`${MOVE_TOP.label} 섹션으로 이동`}
              >
                {MOVE_TOP.label}
              </Button>
            </span>
          </div>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => handleNavClick(item.id)}
                aria-label={`${item.label} 섹션으로 이동`}
              >
                {item.label}
              </Button>
            ))}
            <Button onClick={()=>{ window.open( 'https://forms.gle/5hcuKZivWkemG3476', '_blank' ); }} variant="primary">상담신청</Button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={toggle}
              className="hover:text-primary-hover transition-colors cursor-pointer"
              aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
              aria-expanded={isOpen}
            >
              <Icon name={isOpen ? 'ri-close-line' : 'ri-menu-line'} size="large" />
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="py-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="block w-full text-left px-4 py-2 hover:text-primary-hover hover:bg-gray-50 transition-colors cursor-pointer"
                  aria-label={`${item.label} 섹션으로 이동`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 py-2">
                <Button variant="primary" fullWidth>
                  상담신청
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

export default Navbar;
