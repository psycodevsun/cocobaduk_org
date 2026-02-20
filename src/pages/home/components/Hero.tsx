import { memo } from 'react';
import { cn } from '@/utils/cn';
import { Image } from '@/components/ui';

const Hero = memo(function Hero() {
  return (
    <section
      id="home"
      className={cn(
        'relative min-h-[500px] md:h-[750px] lg:h-[600px]',
        'text-gray-800 flex items-center overflow-hidden',
        'pt-16 pb-0 lg:pb-8 bg-surface-warm'
      )}
      aria-labelledby="hero-title"
    >
      <div className="relative z-10 max-w-7xl mx-auto md:px-8 w-full">
        <div className="grid lg:grid-cols-2 items-center h-full">
          <div className="text-left relative z-10">
            <div className="px-6 md:px-0 mt-5 lg:mt-0 mb-1 md:mb-3">
              <h2 className="text-2xl md:text-3xl tracking-tight mb-2">
                온라인 No.1 코코바둑
              </h2>
            </div>

            <div className="px-6 md:px-0 mb-4 md:mb-6 lg:mb-8">
              <h1
                id="hero-title"
                className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight mb-3 leading-tight"
              >
                바둑으로 집중력이 <span className="text-primary-emphasis">쑥쑥</span>
              </h1>
            </div>

            <p className="px-6 md:px-0 text-lg md:text-xl lg:text-lg mb-2 leading-relaxed tracking-body">
              집중력 · 판단력 · 수리력 성장을 한번에
            </p>
          </div>

          {/* 모바일 이미지 */}
          <div className="w-full lg:hidden">
            <Image
              src="/upimg/12.jpg"
              alt="바둑 교육 이미지"
              rounded="none"
              className="h-full scale-[1.2] relative bottom-[0px]"
            />
          </div>

          {/* PC 이미지 */}
          <div className="hidden lg:flex justify-center items-center h-full pt-14">
            <Image
              src="/upimg/12.jpg"
              alt="바둑 교육 이미지"
              rounded="none"
              className="h-full scale-[1.7] relative bottom-[30px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
