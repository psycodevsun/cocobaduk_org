import { memo } from 'react';
import { Section, Container, Image } from '@/components/ui';
import { CURRICULUM_DATA } from '@/constants';

const Curriculum = memo(function Curriculum() {
  return (
    <Section id="curriculum" background="white" ariaLabelledby="curriculum-title" className='pb-0 max-md:pt-14'>
      <Container size='wide' className='p-0 rounded-none'>
        <div className="text-center">
          <h2 id="curriculum-title" className="text-3xl md:text-4xl tracking-title mb-0 max-md:mb-2">
            실력별 <span className="font-bold">성장 커리큘럼</span>
          </h2>
        </div>

        {/* 이미지 추가 */}
        <div>
          <Image
            src="/upimg/10-1.jpg"
            alt="커리큘럼 이미지"
            className="w-full max-md:hidden mb-[-100px]"
          />

          <Image
            src="/upimg/10.jpg"
            alt="커리큘럼 이미지"
            className="w-full hidden max-md:block"
          />
        </div>

        {/* 커리큘럼 표 */}
        <div className="relative z-10 overflow-x-auto pb-20 w-full max-md:px-5 max-md:pb-12 bg-gradient-to-b from-[#ffffff] to-[#f1f8fe] md:pb-52">
          <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden max-w-5xl m-auto">
            <thead>
              <tr className="bg-table-head text-white">
                <th className="px-4 py-3 font-bold tracking-tight max-md:text-xs max-md:p-2 text-center">반 이름</th>
                <th className="px-4 py-3 font-bold tracking-tight max-md:text-xs max-md:p-2 text-center">핵심 개념</th>
                <th className="px-4 py-3 font-bold tracking-tight max-md:text-xs max-md:p-2 text-center">핵심 발달 능력</th>
                <th className="px-4 py-3 font-bold tracking-tight max-md:text-xs max-md:p-2 text-center">단계별 도달 성과</th>
              </tr>
            </thead>
            <tbody>
              {CURRICULUM_DATA.map((item, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-100 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } hover:bg-table-hover transition-colors`}
                >
                  <td className="px-3 py-4 max-md:p-0 max-md:w-14">
                    <div className="font-bold tracking-tight text-table-level max-md:text-xs text-center">{item.level}</div>
                    <div className="text-lg tracking-tight max-md:text-xs text-center">{item.grade}</div>
                  </td>
                  <td className="px-3 py-4 tracking-tight text-lg max-md:p-2 max-md:text-xs text-center max-md:w-24">{item.concept}</td>
                  <td className="px-3 py-4 max-md:p-2 text-center max-md:w-6">
                    <span className="block w-[130px] max-md:w-full bg-label-bg text-label-text px-4 py-1 rounded-full text-base tracking-tight text-center whitespace-nowrap max-md:text-xs">
                      {item.ability}
                    </span>
                  </td>
                  <td className="px-3 py-4 tracking-tight text-lg max-md:text-xs text-center max-md:p-2 max-md:break-keep max-md:w-24" dangerouslySetInnerHTML={{ __html: item.result ?? '' }}></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
});

export default Curriculum;
