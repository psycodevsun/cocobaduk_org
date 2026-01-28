import { memo } from 'react';
import { Section, Container, Image } from '@/components/ui';
import { TARGET_AUDIENCE } from '@/constants';

const Testimonials = memo(function Testimonials() {
  return (
    <Section background="warm" ariaLabelledby="testimonials-title" className='bg-[#f7eee3] pb-0'>
      <Container size='wide' className='p-0 relative'>
        <div className="mb-12 max-w-5xl mx-auto">
          <h2 id="testimonials-title" className="text-3xl md:text-4xl tracking-title text-center mb-20">
            이런 분들께 <span className="font-bold">추천합니다</span>
          </h2>

          <div className='flex flex-col gap-5'>
            {TARGET_AUDIENCE.map((item, index) => (
              <div key={index} className="flex items-center py-4 px-20 bg-white rounded-lg max-md:px-6">
                <span className="mr-3 flex-shrink-0" aria-hidden="true">
                  <Image src="/upimg/checkbox.png" alt="체크박스"/>
                </span>
                <span className="tracking-body flex gap-1 pl-5 max-md:flex-wrap" dangerouslySetInnerHTML={{ __html: item }}/>
              </div>
            ))}
          </div>
        </div>

        <div className='w-[1px] h-20 bg-black my-12 m-auto'></div>

        <div className='text-center'>
          <h3 className='text-3xl'>반포에서 검증된 바둑교육을</h3>
          <p className='bg-primary-emphasis text-white text-lg w-1/4 m-auto mb-6 rounded-full font-bold mt-2 max-md:w-[70%]'>집에서 경험하고 싶은 분</p>
        </div>

        <Image src='/upimg/13-1.jpg' className='pb-[100px] bg-[#d6eff5] max-md:hidden' alt='이미지'/>
        <Image src='/upimg/13-2.jpg' className='pb-[250px] bg-[#d6eff5] hidden max-md:block' alt='이미지'/>

        <div className="text-center absolute bottom-[70px] w-full flex justify-center max-md:bottom-[50px] max-mb:relative">
          <div className="bg-primary-emphasis text-white p-4 md:p-8 rounded-2xl w-[70%] max-md:w-[90%]">
            <div className="mb-2">
              <h3 className="text-3xl font-bold tracking-title">코코 바둑 온라인 바둑학원</h3>
            </div>
            <p className="text-lg mb-3 tracking-body max-md:text-base">
              오프라인의 불편함은 줄이고, 학습의 질은 더 높이다
            </p>
            <div className="text-center">
              <span className="inline-block px-10 py-3 rounded-full bg-surface-warm">
                <p className="text-3xl font-bold tracking-body text-pt-b300 max-md:text-xl">
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
