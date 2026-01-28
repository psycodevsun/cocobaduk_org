import { memo } from 'react';
import { Section, Container, Card, Button, Icon, Image } from '@/components/ui';
import { SITE_INFO } from '@/constants';

const CTA = memo(function CTA() {
  return (
    <Section background="gray" ariaLabelledby="cta-title" className='bg-gradient-to-tr from-[#4493ce] to-[#2864a0]'>
      <Container>
        <div className="text-center">
          <h2 id="cta-title" className="text-3xl text-white md:text-4xl font-bold mb-2 tracking-title">
            온라인 바둑 교육의 새로운 기준
          </h2>
          <p className="text-xl lg:text-lg tracking-body mb-8 text-white">체험 수업으로 직접 확인하세요</p>

          <Image src='/upimg/11-1.png' className='w-[80%] m-auto max-md:hidden' alt='쿠폰'/>
          <Image src='/upimg/11-2.png' className='w-[80%] m-auto hidden max-md:block max-md:w-full' alt='쿠폰'/>

          <p className='text-xs mb-3 tracking-tight text-white max-md:mt-3 max-md:text-base'>학습목표와 현재 상황에 맞는<br className='hidden max-md:block'/> 개인별 맞춤 상담 제공</p>
          
          <Button variant="cta" size="large" asLink href={SITE_INFO.phone} className='font-normal flex items-center text-2xl text-center w-1/2 m-auto rounded-full justify-center bg-[#f23991] hover:bg-[#c9377c] max-md:w-full'>
            <a href='tel:010-6325-8985' className='font-bold'>체험수업 신청하기</a> 클릭 <Image src="/upimg/phone.png" alt='전화기 아이콘' className='w-[20px] h-[20px] ml-1'/>
          </Button>
        </div>
      </Container>
    </Section>
  );
});

export default CTA;
