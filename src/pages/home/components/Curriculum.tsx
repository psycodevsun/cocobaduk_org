
export default function Curriculum() {
  const levels = [
    {
      level: "입문반 (50급)",
      description: "바둑 기초 개념",
      icon: "ri-seedling-line",
      color: "green"
    },
    {
      level: "초급반 (40급)",
      description: "기본 전술 & 대국 적응",
      icon: "ri-play-line",
      color: "blue"
    },
    {
      level: "중급반 (30급)",
      description: "선수자격증 취득 도전",
      icon: "ri-trophy-line",
      color: "purple"
    },
    {
      level: "고급반 (20급)",
      description: "전국대회 출전 (1년 내)",
      icon: "ri-medal-line",
      color: "orange"
    },
    {
      level: "기사반 (10급)",
      description: "전국대회 입상 (2년 내)",
      icon: "ri-award-line",
      color: "red"
    },
    {
      level: "유단자반 (1단 이상)",
      description: "고급 전략 & 세계대회 출전",
      icon: "ri-star-line",
      color: "yellow"
    }
  ];

  return (
    <section id="curriculum" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <i className="ri-stairs-line mr-3 text-indigo-600"></i>
            실력별 성장 커리큘럼
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {levels.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-${item.color}-100 text-${item.color}-800 rounded-full flex items-center justify-center mr-4`}>
                  <i className={`${item.icon} text-xl`}></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{item.level}</h3>
                </div>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
