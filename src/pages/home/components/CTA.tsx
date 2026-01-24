import { memo } from 'react';
import { Section, Container, Card, Button } from '@/components/ui';
import { SITE_INFO } from '@/constants';

const CTA = memo(function CTA() {
  return (
    <Section background="gray" ariaLabelledby="cta-title">
      <Container>
        <div className="text-center">
          <h2 id="cta-title" className="text-3xl md:text-4xl font-bold mb-2 tracking-title">
            온라인 바둑 교육의 새로운 기준
          </h2>
          <p className="text-xl lg:text-lg tracking-body mb-8">체험 수업으로 직접 확인하세요</p>

          {/* 맞춤 상담 */}
          <Card variant="elevated" className="py-20 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">1:1 맞춤 체험수업 50% 할인</h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              학습 목표와 현재 상황에 맞는 개인별 맞춤 상담 제공
            </p>

            <p className="text-gray-600 text-ld font-bold leading-relaxed mb-4">
              정가 60,000원 → <span className="text-teal-600">체험가 30,000원(당일 등록시 무료)</span>
            </p>

            <Button variant="cta" size="large" asLink href={SITE_INFO.phone}>
              체험수업 신청하기
            </Button>
          </Card>
        </div>
      </Container>
    </Section>
  );
});

export default CTA;
