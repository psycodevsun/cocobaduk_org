import { memo } from 'react';
import { Section, Container, Image } from '@/components/ui';
import { GROWLEVEL } from '@/constants';

const Section01 = memo(function section01() {
  return (
    <Section id="section01" background="white" ariaLabelledby="section01-title" className='overflow-hidden md:pb-32'>
      <Container>
          <div className="text-center mb-20 max-md:mb-12">
            <h2 id="section01-title" className="text-3xl md:text-4xl mb-2 tracking-tight">
                우리 아이 바둑수업 <span className='font-bold max-md:block'>왜 코코바둑 일까요?</span>
            </h2>

            <p className='text-xl tracking-tight'>코코바둑은 다릅니다!</p>
          </div>

          {/* 성장단계 */}
          <div>
            <div className='border-[#97c1e0] border-[1px] rounded-3xl bg-white max-md:px-7'>
              <h3 className='tracking-tight text-2xl font-bold bg-[#104b85] text-white text-center w-1/2 m-auto py-2 rounded-b-2xl max-md:w-full max-md:text-lg max-md:p-0'>성장 단계별 승급 • 대회 • 자격증</h3>

              <p className='text-[#104b85] font-semibold text-center mt-5 text-xl max-md:text-sm max-md:tracking-tighter max-md:mt-2'>매월 교육목표 설정 & 달성</p>

              <div className='flex relative justify-center gap-6 mt-14 mb-14 after:w-[70%] after:border-1 after:absolute after:border-b after:border-dashed after:border-[#104b85] items-center max-md:grid max-md:grid-cols-3 max-md:gap-4 max-md:my-10 max-md:after:bottom-[40px] max-md:after:w-[110%] max-md:after:left-[-5%] max-md:before:border-1 max-md:before:absolute max-md:before:border-b max-md:before:border-dashed max-md:before:border-[#104b85] max-md:before:w-[110%] max-md:before:left-[-5%] max-md:before:top-[40px]'>
                {GROWLEVEL.map((level)=>{
                  return (
                    <div className='relative flex items-center justify-center bg-transparent z-10'>
                      <Image src={`/upimg/${level.image}.png`} className='w-auto' alt='성장 단계'/>
                      <p className="absolute text-lg font-bold" style={{ color: level.color }}>{level.title}</p>
                    </div>
                  )
                })}
              </div>

              <p className='text-center tracking-tight mb-14 text-lg max-md:text-xs max-md:mb-6 max-md:break-keep'>아이의 속도에 맞춰 매월 목표를 설정하고<br/>입문 → 초급 → 중급 → 고급  → 기사 → 유단자까지 <br className='hidden max-md:block'/>성장 방향을 함께 공유합니다</p>
            </div>
          </div>

          {/* 전문가의 직강 */}
          <div className='mt-32 max-md:mt-12'>
            <div className='border-[#97c1e0] border-[1px] rounded-3xl bg-white max-md:px-7'>
              <h3 className='tracking-tight text-2xl font-bold bg-[#104b85] text-white text-center w-1/2 m-auto py-2 rounded-b-2xl max-md:w-full max-md:text-lg max-md:py-0'>유아 교육심리 전문가의 직강</h3>

              <p className='text-[#104b85] font-semibold text-center mt-5 text-xl max-md:text-sm max-md:tracking-tighter max-md:mt-2'>학습태도와 심리까지 함께 잡는 수업</p>

              <div className='flex justify-center items-center gap-12 my-6 max-md:gap-0 max-md:mb-3'>
                <Image src='/upimg/pro01.png' className='relative w-auto max-md:w-1/2 max-md:right-[20px]' alt='전문가'/>

                <div className='relative max-md:scale-[1.6] max-md:relative max-md:right-[20px]'>
                  <Image src='/upimg/pro02.png' className='w-auto' alt='전문가'/>
                </div>
              </div>

              <p className='text-center mb-8 tracking-tight text-lg max-md:text-sm max-md:mb-6 max-md:break-keep'>바둑 실력만 키우는 수업이 아닙니다<br/>바둑을 통해 아이의 성향과 심리를 이해하고 <br className='hidden max-md:block'/>학습태도·행동까지 함께 지도합니다</p>
            </div>
          </div>

          {/* 집중수업 */}
          <div className='mt-10 relative'>
            <div className='absolute w-[250%] h-[70%] bg-gray-50 top-10 z-0 left-[-100%] max-md:hidden'></div>

            <Image src='/upimg/sec1-3.jpg' alt='집중수업' className='relative w-auto m-auto z-10 border-x-[20px] border-white max-md:rounded-2xl'/>

            <div className='border-[#97c1e0] border-[1px] rounded-3xl bg-white relative b-[100px] bottom-24 z-10 max-md:px-7 max-md:bottom-8'>
              <h3 className='tracking-tight text-2xl font-bold bg-[#104b85] text-white text-center w-1/2 m-auto py-2 rounded-b-2xl max-md:w-full max-md:text-lg max-md:py-0'>1:1 • 1:2 소수정예 집중 수업</h3>

              <p className='text-[#104b85] font-semibold text-center mt-5 text-xl max-md:text-sm max-md:tracking-tighter max-md:mt-2'>우리아이 맞춤 케어로 확실한 성장</p>

              <p className='text-center mt-8 mb-10 text-lg max-md:text-sm max-md:mb-6 max-md:break-keep tracking-tight'>아이의 작은 변화까지 놓치지 않는 초밀착 지도<br/>단체수업에서는 불가능한 개별 맞춤 케어로 <br className='hidden max-md:block'/>성장 속도를 높입니다</p>
            </div>
          </div>

          {/* 커리큘럼 */}
          <div className='mt-2'>
            <div className='border-[#97c1e0] border-[1px] rounded-3xl bg-white max-md:px-7'>
              <h3 className='tracking-tight text-2xl font-bold bg-[#104b85] text-white text-center w-1/2 m-auto py-2 rounded-b-2xl max-md:w-full max-md:text-lg max-md:p-0'>23년 경력 기반 맞춤 커리큘럼</h3>

              <p className='text-[#104b85] font-semibold text-center mt-5 text-xl max-md:text-sm max-md:tracking-tighter max-md:mt-2'>효과 검증된 수업으로 아이 수준에 맞춘 단계별 설계</p>

              <div className='flex justify-center items-center gap-12 my-6 max-md:my-4'>
                <Image src='/upimg/sec1-4.png' className='w-auto' alt='커리큘럼'/>
              </div>

              <p className='text-center mb-8 tracking-tight text-lg max-md:text-xs max-md:mb-6 max-md:break-keep'>23년 경력으로 만든 '우리 아이 맞춤' 커리큘럼<br/><br className='hidden max-md:block'/>아이의 속도에 맞춰 매월 교육 목표를 단계별로 설계합니다</p>
            </div>
          </div>
      </Container>
    </Section>
  );
});

export default Section01;
