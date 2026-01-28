import { memo } from 'react';
import { Section, Container, Image } from '@/components/ui';

const Consultation = memo(function consultation() {
  return (
    <Section id="consultation" background="white" ariaLabelledby="consultation-title" className='bg-gradient-to-tr from-[#418fc9] to-[#0a4272] max-md:pb-10'>
      <Container size="wide">
        <div className='text-center'>
          <h1 className='text-white font-bold text-3xl'>1:1 대국 + 실력 진단<br className='hidden max-md:block'/> + 상담까지</h1>
          <p className='bg-[#f23991] w-1/3 text-white m-auto text-2xl rounded-full font-semibold mt-2 max-md:w-full max-md:mt-6'>1시간 체험수업 할인 이벤트</p>
        </div>

        <div className='flex justify-center mt-3 items-end gap-4'>
          <Image src='/upimg/discount.png' alt="50% 할인" className='w-[120px] max-md:w-[100px]'/>

          <div className='text-right mb-4 tracking-tighter'>
            <p className='text-[#bbbab8] font-semibold'>정상가</p>
            <h5 className='text-white text-3xl font-bold max-md:text-xl'>할인가</h5>
          </div>

          <div className='text-right mb-4 tracking-tighter'>
            <p className='text-[#bbbab8] font-semibold line-through'>60,000원</p>
            <h5 className='text-[#fff35d] text-3xl font-bold max-md:text-xl'>30,000원</h5>
          </div>
        </div>

        <div className='bg-white w-1/3 text-center p-5 rounded-2xl mt-12 m-auto max-md:w-full'>
          <h3 className='font-bold text-[#2864a0] text-xl'>지금 바로 전화주세요</h3>
          <a href='tel:010-6325-8985' className='block bg-[#f23991] w-[70%] text-white m-auto text-xl rounded-full font-bold mt-2 hover:bg-[#c9377c]'>010-6325-8985</a>
          <p className='text-gray-600 mt-2 text-sm tracking-tighter'>핸드폰에서 클릭하시면 전화 연결이 가능합니다</p>
        </div>

        <div className='bg-white w-1/3 text-center p-5 rounded-2xl mt-12 m-auto max-md:w-full max-md:mt-6'>
          <h3 className='font-bold text-[#2864a0] text-xl'>간단한 상담 신청만 남겨주세요</h3>
          <a href='https://forms.gle/5hcuKZivWkemG3476' target='_blank' className='block bg-[#f23991] w-[70%] text-white m-auto text-xl rounded-full font-bold mt-2 hover:bg-[#c9377c]'>상담신청 남기기 클릭!</a>
          <p className='text-gray-600 mt-2 text-sm tracking-tighter'>핸드폰에서 클릭하시면 전화 연결이 가능합니다</p>
        </div>

        <p className='text-white mt-12 font-bold text-base text-center'>지금, 부담없이 시작해보세요</p>
      </Container>
    </Section>
  );
});

export default Consultation;
