import { memo } from 'react';
import { Section, Container, Card, Grid } from '@/components/ui';
import { TARGET_AUDIENCE } from '@/constants';

const Testimonials = memo(function Testimonials() {
  return (
    <Section background="warm" ariaLabelledby="testimonials-title">
      <Container>
        <div className="text-center mb-16">
          <Card variant="elevated" padding="large" className="max-w-5xl mx-auto mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">1시간 체험수업</h3>
            <p className="text-lg text-gray-600 mb-4">1:1 대국 + 실력 진단 + 상담까지</p>
            <div className="text-4xl font-bold text-yellow-600 mb-4">단 30,000원</div>
            <p className="text-gray-600">지금, 부담 없이 시작해보세요</p>
          </Card>
        </div>

        <div className="p-4 md:p-8 mb-12 max-w-5xl mx-auto">
          <h2 id="testimonials-title" className="text-3xl md:text-4xl tracking-title text-center mb-10">
            이런 분들께 <span className="font-bold">추천합니다</span>
          </h2>

          <Grid cols={2} gap="small" className="mt-8">
            {TARGET_AUDIENCE.map((item, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg">
                <span className="mr-3 flex-shrink-0" aria-hidden="true">•</span>
                <span className="tracking-body">{item}</span>
              </div>
            ))}
          </Grid>
        </div>

        <div className="text-center">
          <div className="bg-primary-emphasis text-white p-4 md:p-8 rounded-2xl max-w-5xl mx-auto">
            <div className="mb-2">
              <h3 className="text-3xl font-bold tracking-title">코코 바둑 온라인 바둑학원</h3>
            </div>
            <p className="text-lg mb-3 tracking-body">
              오프라인의 불편함은 줄이고, 학습의 질은 더 높이다
            </p>
            <div className="text-center">
              <span className="inline-block px-10 py-3 rounded-full bg-surface-warm">
                <p className="text-3xl font-bold tracking-body text-pt-b300">
                  집에서 편하게! 결과는 확실하게
                </p>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
});

export default Testimonials;
