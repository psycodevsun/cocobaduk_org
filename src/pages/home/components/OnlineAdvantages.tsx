import { memo } from 'react';
import { Section, Container, Image, Icon } from '@/components/ui';
import { ADVANTAGES } from '@/constants';

const OnlineAdvantages = memo(function OnlineAdvantages() {
  return (
    <Section background="warm" ariaLabelledby="online-advantages-title" className='relative max-md:pt-20 max-md:pb-0'>
      <Container className='max-md:p-0'>
        <div className="text-center mb-12">
          <h2 id="online-advantages-title" className="text-3xl md:text-4xl mb-2 tracking-title">
            집에서 편하게
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-title mb-6">
            원하는 시간에 배우는 온라인 <br className='hidden max-md:block'/>바둑
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* 이미지 왼쪽 */}
          <div>
            <Image src="/upimg/8-1.png" alt="온라인 수업 이미지" className='max-h-[600px] absolute bottom-0 left-[-25%] object-contain max-md:hidden'/>
          </div>

          {/* 4개 박스 오른쪽 */}
          <div className="grid grid-cols-1 gap-4 max-md:px-7">
            {ADVANTAGES.map((advantage, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-6 bg-white rounded-xl max-md:items-start z-10"
              >
                <div className="w-10 h-10 bg-primary-emphasis rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold max-md:w-5 max-md:h-5 max-md:mt-1">
                  {index + 1}
                </div>
                <div>
                  <p className="text-lg tracking-body break-keep" dangerouslySetInnerHTML={{ __html: advantage.title }}/>
                </div>
              </div>
            ))}
          </div>

          <Image src="/upimg/8.jpg" alt="온라인 수업 이미지" className='md:hidden'/>
        </div>
      </Container>
    </Section>
  );
});

export default OnlineAdvantages;
