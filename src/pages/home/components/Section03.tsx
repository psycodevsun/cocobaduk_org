import { memo } from 'react';
import { Section, Container, Image } from '@/components/ui';
import { SEC03CONTS } from '@/constants';

const Section03 = memo(function section03() {
  return (
    <Section id="section03" background="white" ariaLabelledby="section03-title" className='bg-[#f9fafc] max-md:pt-14 max-md:pb-16'>
      <Container className='md:max-w-[70%]'>
        <div className="text-center mb-16 max-md:mb-9">
          <h2 id="section01-title" className="text-3xl md:text-4xl font-bold mb-2 tracking-tight leading-none max-md:text-2xl max-md:leading-none">
            오랜 기간 검증된 선택의 이유 <span className='text-2xl font-normal tracking-tight max-md:text-base block mt-2'>시간이 증명한 바둑 수업</span>
          </h2>
        </div>

        <div className='flex flex-col gap-16'>
          {SEC03CONTS.map((el, index)=>{
            const isEven = index % 2 === 1; 
            return (
              <div className={`flex bg-white ${isEven ? 'flex-row-reverse' : ''} max-md:block md:h-[300px]`} key={index}>
                <Image src={`/upimg/${el.image}.jpg`} alt='섹션3 이미지' className='w-1/2 max-md:w-full object-top'/>

                <div className='w-1/2 flex items-start px-14 py-16 gap-3 max-md:w-full pr-0 max-md:p-7 max-md:pr-2'>
                  <p className='bg-[#2864a0] text-white font-bold w-[30px] h-[30px] max-md:w-[25px] max-md:h-[25px] text-center text-xl rounded-full mt-1 max-md:text-base'>{index + 1}</p>

                  <div>
                    <div className='flex gap-3 items-center max-md:gap-1'>
                      <p className='text-[#2864a0] font-bold text-2xl max-md:text-base tracking-tighter'>{el.title}</p>
                      <span className='text-xl text-[#68a6d5] max-md:text-sm'>{el.tag}</span>
                    </div>

                    <ul className='max-md:ml-3'>
                      {el.category.map((contents)=>{
                        return (
                          <li className='mt-4 text-lg list-disc max-md:text-sm max-md:mt-3'>{contents}</li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className='mt-20 text-center max-md:mt-0'>
          <h3 className='bg-[#2864a0] py-1 text-white font-bold rounded-full w-fit px-12 m-auto max-md:w-full'>처음 바둑을 시작할수록 <br className='hidden max-md:block'/>아이에게 맞는 선생님이 중요합니다.</h3>
          <p className='mt-4 text-base tracking-tight'>아이의 변화를 직접 경헙해보세요</p>
        </div>

        <p className='text-gray-500 text-sm text-center mt-16 max-md:text-xs md:mb-10 max-md:mt-4 tracking-tight'>※ 누적 지도 학생 수, 재수강률, 추천율은 내부 운영 데이터 기준 (2011~2025년) 입니다</p>
      </Container>
    </Section>
  );
});

export default Section03;
