
export default function Curriculum() {
  const curriculumData = [
    { level: "입문반", grade: "50급", concept: "넓은 곳 찾기", ability: "공간비교능력" },
    { level: "초급반", grade: "40급", concept: "돌 잡기", ability: "연산능력" },
    { level: "중급반", grade: "30급", concept: "상대 돌 막기", ability: "전략예측능력" },
    { level: "중급반", grade: "25급", concept: "강한 돌·약한 돌 판단", ability: "판단력" },
    { level: "고급반", grade: "20급", concept: "중요한 돌 찾기", ability: "관찰력" },
    { level: "고급반", grade: "15급", concept: "공격·수비 결정", ability: "전략구상능력" },
    { level: "기사반", grade: "10급", concept: "수읽기", ability: "추론능력" },
    { level: "기사반", grade: "5급", concept: "수의 가치 계산", ability: "가치판단능력" },
    { level: "유단자반", grade: "1급", concept: "최선의 수 결정", ability: "미래예측능력" },
  ];

  const milestones = [
    { level: "중급반 도달", achievement: "선수자격증 취득 가능" },
    { level: "고급반 도달", achievement: "전국 바둑대회 출전" },
    { level: "기사반 도달", achievement: "전국 바둑대회 수상 가능" },
    { level: "유단자반 도달", achievement: "5시간 집중력 + 세계 바둑대회 출전 가능" },
  ];

  return (
    <section id="curriculum" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <i className="ri-stairs-line mr-3 text-teal-600"></i>
            실력별 성장 커리큘럼
          </h2>
        </div>

        {/* 이미지 추가 */}
        <div className="mb-12">
          <img
            src="/upimg/10.jpg"
            alt="커리큘럼 이미지"
            className="w-full max-w-5xl mx-auto rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* 커리큘럼 표 */}
        <div className="overflow-x-auto mb-12 max-w-5xl mx-auto">
          <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
            <thead>
              <tr className="bg-teal-600 text-white">
                <th className="px-3 py-4 text-left font-bold">반 이름</th>
                <th className="px-3 py-4 text-left font-bold">핵심 개념</th>
                <th className="px-3 py-4 text-left font-bold">핵심 발달 능력</th>
              </tr>
            </thead>
            <tbody>
              {curriculumData.map((item, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-teal-50 transition-colors`}
                >
                  <td className="px-3 py-4">
                    <div className="font-medium text-teal-700">{item.level}</div>
                    <div className="text-sm text-gray-500">{item.grade}</div>
                  </td>
                  <td className="px-3 py-4 text-gray-700 text-sm">{item.concept}</td>
                  <td className="px-3 py-4">
                    <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                      {item.ability}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 하단 안내문 */}
        <div className="bg-teal-50 rounded-xl p-4 md:p-6 max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-teal-800 mb-4 text-center">성장 마일스톤</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {milestones.map((item, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <div className="w-3 h-3 bg-teal-500 rounded-full mr-3 flex-shrink-0"></div>
                <div>
                  <span className="font-bold text-teal-700">{item.level}</span>
                  <span className="text-gray-600 ml-2">→ {item.achievement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
