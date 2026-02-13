import { memo } from 'react';
import { Section, Container, Button, Image } from '@/components/ui';
import { SITE_INFO } from '@/constants';

const CTA = memo(function CTA() {
  return (
    <Section background="gray" ariaLabelledby="cta-title" className='bg-gradient-to-tr from-[#4493ce] to-[#2864a0] max-md:pt-10 pt-14 md:pb-10'>
      <Container>
        <div className="text-center">
          <h2 id="cta-title" className="text-3xl text-white md:text-4xl font-bold mb-1 tracking-tighter">
            온라인 바둑 교육의 새로운 기준
          </h2>
          <p className="text-xl lg:text-lg tracking-tight mb-0 text-white max-md:mb-4">체험 수업으로 직접 확인하세요</p>

          <Image src='/upimg/11-1.png' className='w-[80%] m-auto my-6 max-md:hidden' alt='쿠폰'/>
          <Image src='/upimg/11-2.png' className='w-[80%] m-auto hidden max-md:block max-md:w-full' alt='쿠폰'/>

          <p className='text-base mb-3 tracking-tight text-white max-md:mt-3 max-md:text-base font-normal max-md:leading-[1.25]'>학습 목표와 현재 상황에 맞는<br className='hidden max-md:block'/> 개인별 맞춤 상담 제공</p>
          
          <Button variant="cta" size="large" asLink href={SITE_INFO.phone} className='font-normal flex items-center text-4xl max-md:text-2xl text-center w-[800px] m-auto md:py-6 rounded-full justify-center bg-[#f23991] hover:bg-[#c9377c] max-md:w-full'>
            <a href='tel:010-6325-8985' className='font-bold'>체험수업 신청하기</a> 클릭 <Image src="/upimg/phone.png" alt='전화기 아이콘' className='md:w-[35px] md:h-[35px] md:ml-2 w-[25px] h-[25px] ml-1'/>
          </Button>
        </div>
      </Container>
    </Section>
  );
});

export default CTA;
