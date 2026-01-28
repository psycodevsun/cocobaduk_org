import { memo } from 'react';
import { Container, Image, Icon } from '@/components/ui';
import { SITE_INFO } from '@/constants';

const Footer = memo(function Footer() {
  return (
    <footer className="bg-pt-b300 text-white pt-6 pb-16 lg:py-16">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 왼쪽: 사진 */}
          <div>
            <Image src="/upimg/11.jpg" alt="코코바둑 이미지" />
          </div>

          {/* 오른쪽: 설명 및 연락처 */}
          <div className="flex flex-col justify-center h-full">
            <div className="mb-8">
              <h3 className="text-3xl font-bold tracking-title mb-3">코코 바둑</h3>
              <p className="text-lg text-white tracking-body">우리 아이를 위한 최고의 선택!</p>
              <p className="text-lg text-white tracking-body">
                코코바둑에서 지금 바로 시작하세요!
              </p>
            </div>

            {/* 연락처 */}
            <div className="px-6 py-5 bg-white rounded-xl">
              <h4 className="text-xl text-pt-b300 font-bold tracking-body">지금 바로 전화 주세요</h4>
              <a
                href={SITE_INFO.phone}
                className="flex items-center text-3xl text-pt-b200 font-bold tracking-body"
                aria-label={`전화 연결: ${SITE_INFO.phoneDisplay}`}
              >
                {SITE_INFO.phoneDisplay}
              </a>
            </div>

            <div className="flex space-x-4 mt-8">
              <a
                href="#"
                className="text-gray-300 hover:text-teal-400 transition-colors"
                aria-label="페이스북"
              >
                <Icon name="fab fa-facebook-f" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-teal-400 transition-colors"
                aria-label="인스타그램"
              >
                <Icon name="fab fa-instagram" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-teal-400 transition-colors"
                aria-label="유튜브"
              >
                <Icon name="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white mt-12 pt-8 text-center">
          <p className="text-2xl font-bold text-white tracking-body mb-2">
            우리 아이를 위한 바둑수업 코코바둑<br className='hidden max-md:block'/>
            <span className="text-pt-b400"> 아이에게 맞는 수업인지 <br className='hidden max-md:block'/>직접 확인해보세요</span>
          </p>
          <p className="text-sm text-white tracking-body">
            © 2025 코코 바둑 온라인 바둑학원. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
});

export default Footer;
