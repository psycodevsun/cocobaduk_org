import { memo } from 'react';
import { Section, Container, Image } from '@/components/ui';
import { CURRICULUM_DATA } from '@/constants';

const Curriculum = memo(function Curriculum() {
  return (
    <Section id="curriculum" background="gradient" ariaLabelledby="curriculum-title">
      <Container>
        <div className="text-center mb-12">
          <h2 id="curriculum-title" className="text-3xl md:text-4xl tracking-title mb-6">
            실력별 <span className="font-bold">성장 커리큘럼</span>
          </h2>
        </div>

        {/* 이미지 추가 */}
        <div className="mb-12">
          <Image
            src="/upimg/10.jpg"
            alt="커리큘럼 이미지"
            shadow
            className="max-w-5xl mx-auto"
          />
        </div>

        {/* 커리큘럼 표 */}
        <div className="overflow-x-auto mb-12 max-w-5xl mx-auto">
          <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
            <thead>
              <tr className="bg-table-head text-white">
                <th className="px-4 py-3 text-left font-bold tracking-body">반 이름</th>
                <th className="px-4 py-3 text-left font-bold tracking-body">핵심 개념</th>
                <th className="px-4 py-3 text-left font-bold tracking-body">핵심 발달 능력</th>
                <th className="px-4 py-3 text-left font-bold tracking-body">단계별 도달 성과</th>
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
                  <td className="px-3 py-4">
                    <div className="font-bold tracking-body text-table-level">{item.level}</div>
                    <div className="text-lg tracking-body">{item.grade}</div>
                  </td>
                  <td className="px-3 py-4 tracking-body text-lg">{item.concept}</td>
                  <td className="px-3 py-4">
                    <span className="bg-label-bg text-label-text px-4 py-1 rounded-full text-base tracking-body text-center whitespace-nowrap">
                      {item.ability}
                    </span>
                  </td>
                  <td className="px-3 py-4 tracking-body text-lg">{item.result}</td>
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
