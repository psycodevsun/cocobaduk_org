import { memo } from 'react';
import { Section, Container, Image, Icon } from '@/components/ui';
import { ADVANTAGES } from '@/constants';

const OnlineAdvantages = memo(function OnlineAdvantages() {
  return (
    <Section background="warm" ariaLabelledby="online-advantages-title">
      <Container>
        <div className="text-center mb-12">
          <h2 id="online-advantages-title" className="text-3xl md:text-4xl mb-2 tracking-title">
            집에서 편하게
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-title mb-6">
            원하는 시간에 배우는 온라인바둑
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* 이미지 왼쪽 */}
          <div>
            <Image src="/upimg/8.jpg" alt="온라인 수업 이미지" shadow />
          </div>

          {/* 4개 박스 오른쪽 */}
          <div className="grid grid-cols-1 gap-4">
            {ADVANTAGES.map((advantage, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-6 bg-white rounded-xl"
              >
                <div className="w-10 h-10 bg-primary-emphasis rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name={advantage.icon} className="text-white" />
                </div>
                <div>
                  <p className="text-lg tracking-body">{advantage.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
});

export default OnlineAdvantages;
