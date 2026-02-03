import { memo } from 'react';
import { Section, Container, Image } from '@/components/ui';

const Section02 = memo(function section02() {
  return (
    <Section id="section02" background="white" ariaLabelledby="section02-title" className='p-0'>
      <Container className='px-0 relative flex justify-center' size="wide">
        <Image src='/upimg/sec2-banner-pc.jpg' className='rounded-none max-md:hidden' alt='섹션2'/>
        <Image src='/upimg/sec2-banner-mo.jpg' className='rounded-none md:hidden' alt='섹션2'/>

        <div className='absolute top-[10%] max-md:px-7'>
          <div className='flex justify-center items-center'>
            <Image src='/upimg/wing.png' alt='15년간 9,500명' className='w-60 max-md:w-40'/>

            <p className='text-center text-lg tracking-tight absolute leading-none top-6 max-md:text-sm max-md:top-2'>15년간 <span className='block text-[#2864a0] font-bold text-3xl max-md:text-xl'>9,500명</span></p>
          </div>

          <div>
            <h1 className='font-bold text-5xl mt-3 text-center max-md:text-3xl'>학생과 학부모가 <span className='text-[#2864a0]'>선택</span>한<br className='hidden max-md:block'/> 코코바둑</h1>
            <p className='text-center mt-2 md:mt-3 text-xl max-md:text-sm'>장기간 검증된 집중력 • 사고력 중심 온라인 바둑 교육</p>
          </div>
        </div>
      </Container>
    </Section>
  );
});

export default Section02;
