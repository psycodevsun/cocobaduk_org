import { memo } from 'react';
import { Section, Container, Card, Image, Grid } from '@/components/ui';
import { FEATURES } from '@/constants';

const Features = memo(function Features() {
  return (
    <Section id="features" background="gray" ariaLabelledby="features-title">
      <Container>
        <div className="text-center mb-6">
          <h2 id="features-title" className="text-3xl md:text-4xl font-bold mb-2 tracking-title">
            학생과 학부모가 <span className="text-primary-emphasis">선택</span>한 코코바둑
          </h2>
          <p className="text-lg md:text-xl lg:text-lg tracking-body leading-relaxed mb-2">
            장기간 검증된 집중력·사고력 중심 온라인 바둑 교육
          </p>
        </div>

        {/* 메인 이미지 */}
        <div className="mb-16">
          <Image src="/upimg/2.jpg" alt="코코바둑 소개 이미지" shadow />
        </div>

        {/* 3개 주요 특징 카드 */}
        <Grid cols={3} gap="large" className="mb-12">
          {FEATURES.map((feature, index) => (
            <Card key={index} variant="elevated" padding="large" hover className="text-center">
              <h3 className="text-2xl md:text-xl lg:text-lg text-primary-emphasis font-bold tracking-title mb-2">
                {feature.title}
              </h3>
              <p className="text-base text-primary-muted mb-3 text-sm md:text-base tracking-body">
                {feature.hashtag}
              </p>
              <ul className="space-y-1 md:space-y-2 text-left">
                {feature.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-gray-700 text-sm md:text-base tracking-body">
                    • {point}
                  </li>
                ))}
              </ul>
              <div className="mt-4 md:mt-6">
                <Image src={feature.image} alt={feature.imageAlt} rounded="lg" />
              </div>
            </Card>
          ))}
        </Grid>

        <div className="text-center mt-10">
          <span className="inline-block px-10 py-2 rounded-full bg-primary-emphasis">
            <p className="text-xl font-bold tracking-body text-white">
              바둑을 처음 배울수록, 아이에게 맞는 시작이 중요합니다.
            </p>
          </span>
        </div>
        <div className="text-center mt-2">
          <p className="text-lg tracking-body">아이의 변화를 직접 경험해보세요.</p>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm tracking-body text-neutral-900 mb-2">
            ※ 누적 지도 학생수, 재수강율, 추천율은 내부 운영 데이터 기준(2011년~2025년)입니다.
          </p>
        </div>
      </Container>
    </Section>
  );
});

export default Features;
