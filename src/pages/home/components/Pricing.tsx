import { memo } from 'react';
import { Section, Container, Card, Button, Icon } from '@/components/ui';
import { SITE_INFO } from '@/constants';

const Pricing = memo(function Pricing() {
  return (
    <Section id="pricing" className="bg-[#F8EEE2]" ariaLabelledby="pricing-title">
      <Container size="narrow">
        <Card variant="bordered" padding="large" className="border-teal-200">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center mr-4">
              <Icon name="ri-gift-line" />
            </div>
            <div className="text-center">
              <h3 id="pricing-title" className="text-2xl font-bold text-teal-800">
                체험수업 (1시간)
              </h3>
              <p className="text-3xl font-bold text-teal-600 mt-2">30,000원</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="ri-check-line" size="large" className="text-teal-600" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">1:1 실력진단</h4>
              <p className="text-sm text-gray-600">개별 맞춤 실력 분석</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="ri-user-heart-line" size="large" className="text-teal-600" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">성향 분석</h4>
              <p className="text-sm text-gray-600">학습 성향 파악</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="ri-chat-3-line" size="large" className="text-teal-600" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">맞춤 상담</h4>
              <p className="text-sm text-gray-600">전문가 학습 상담</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">정확한 수강료는 상담 시 안내드립니다</p>
            <Button variant="cta" size="large" asLink href={SITE_INFO.phone}>
              <Icon name="ri-calendar-check-line" className="mr-2" />
              체험수업 신청하기
            </Button>
          </div>
        </Card>
      </Container>
    </Section>
  );
});

export default Pricing;
