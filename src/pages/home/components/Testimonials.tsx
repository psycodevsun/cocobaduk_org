import { memo } from 'react';
import { Section, Container, Image } from '@/components/ui';
import { TARGET_AUDIENCE } from '@/constants';

const Testimonials = memo(function Testimonials() {
  return (
    <Section background="warm" ariaLabelledby="testimonials-title" className='bg-[#f7eee3] pb-0 max-md:pt-14'>
      <Container size='wide' className='p-0 relative'>
        <div className="max-w-5xl mx-auto">
          <h2 id="testimonials-title" className="text-3xl md:text-4xl text-center mb-20 max-md:mb-16">
            이런 분들께 <span className="font-bold">추천합니다</span>
          </h2>

          <div className='flex flex-col gap-6 max-md:px-4 md:w-[800px] m-auto'>
            {TARGET_AUDIENCE.map((item, index) => (
              <div key={index} className="flex items-center py-4 px-20 bg-white rounded-lg max-md:p-3 max-md:items-start">
                <span className="mr-3 flex-shrink-0 max-md:mr-0 max-md:w-6 max-md:h-6" aria-hidden="true">
                  <Image src="/upimg/checkbox.png" alt="체크박스"/>
                </span>
                <span className="flex gap-1 pl-5 md:text-xl max-md:flex-wrap max-md:tracking-tight max-md:leading-none" dangerouslySetInnerHTML={{ __html: item }}/>
              </div>
            ))}
          </div>
        </div>

        <div className='w-[1px] h-20 bg-black my-12 md:mb-6 m-auto max-md:mb-4'></div>

        <div className='text-center'>
          <h3 className='text-3xl'>반포에서 검증된 바둑 교육을</h3>
          <p className='bg-primary-emphasis text-white text-lg w-fit px-6 m-auto mb-6 rounded-full font-bold mt-2 max-md:w-fit max-md:px-4'>집에서 경험하고 싶은 분</p>
        </div>

        <Image src='/upimg/13-1.jpg' className='pb-[20px] bg-[#d6eff5] max-md:hidden' alt='이미지'/>
        <Image src='/upimg/13-2.jpg' className='pb-[250px] bg-[#d6eff5] hidden max-md:block' alt='이미지'/>

        <div className="text-center absolute bottom-[50px] w-full flex justify-center max-md:bottom-[50px] max-mb:relative">
          <div className="bg-primary-emphasis text-white p-8 py-12 max-md:p-4 rounded-2xl w-[70%] max-md:w-[90%]">
            <div className="">
              <h3 className="text-3xl font-bold tracking-tight">코코바둑 온라인 바둑학원</h3>
            </div>
            <p className="text-lg mb-3 tracking-tighter max-md:text-base max-md:font-normal">
              오프라인의 불편함은 줄이고, 학습의 질은 더 높이다
            </p>
            <div className="text-center">
              <span className="inline-block px-10 py-1 rounded-full bg-surface-warm">
                <p className="text-2xl font-bold text-pt-b300 max-md:py-1 max-md:text-xl tracking-tight max-md:leading-[1.1]">
                  집에서 편하게! <br className='hidden max-md:block'/>결과는 확실하게
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
