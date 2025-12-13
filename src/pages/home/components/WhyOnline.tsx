
export default function WhyOnline() {
  const reasons = [
    {
      number: "1",
      title: "오프라인보다 시간 절약, 효율은 더 높게",
      points: [
        "바쁜 방과후 일정, 바둑학원 데려다주고 데려오느라 너무 힘드셨죠? → 온라인은 집에서 바로 수업 시작!",
        "45~50분 집중 수업 후 바로 복습 가능 → 시간 낭비 없이 몰입도 높은 수업",
        "아이의 컨디션에 맞춰 편한 시간에 수업 선택 가능 → 학부모님도, 아이도 편안한 학습 환경"
      ],
      color: "bg-teal-50 border-teal-200"
    },
    {
      number: "2",
      title: "화상수업인데, 왜 더 잘 배울까요?",
      points: [
        "Zoom 실시간 소통으로 선생님과 1:1 대국 진행 → 아이가 놓치는 부분 없이 즉시 피드백",
        "최신 AI 학습 시스템으로 혼자서도 퀴즈와 연습 가능 → 수업 + 복습까지 완벽 설계",
        "오프라인에선 대국만 하고 끝나는 경우도 많지만, → 온라인은 이론, 사고력 훈련, 복기까지 철저히 진행"
      ],
      color: "bg-teal-50 border-teal-200"
    },
    {
      number: "3",
      title: "두 명만 있는 초집중 수업, 원장님이 직접",
      points: [
        "오프라인에선 5~6명 단체수업, 한 번도 못 물어본 우리 아이 → 온라인은 딱 2명 정원, 원장님이 직접 수업",
        "바둑 경력 20년, 수많은 유단자를 배출한 윤정희 원장님의 1:1 맞춤 지도로 진행",
        "전국 어디서든, 똑같은 고퀄리티 수업을 받습니다"
      ],
      color: "bg-teal-50 border-teal-200"
    },
    {
      number: "4",
      title: "우리 아이, 바둑으로 이렇게 달라졌어요!",
      points: [
        "공부할 때 집중력이 눈에 띄게 좋아졌어요",
        "선택하고, 책임지는 힘이 생겼어요",
        "질문이 많아졌고, 스스로 생각하려는 태도가 생겼어요"
      ],
      color: "bg-teal-50 border-teal-200"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            왜 요즘 학부모님들은<br className="md:hidden" /> 온라인 바둑학원을 선택할까요?
          </h2>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className={`border-2 ${reason.color} p-6 md:p-8 rounded-2xl`}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 hidden md:block">
                  <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {reason.number}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">{reason.title}</h3>

                  <div className="space-y-3">
                    {reason.points.map((point, pointIndex) => (
                      <p key={pointIndex} className="text-gray-700 text-sm md:text-base leading-relaxed pl-0">
                        • {point}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-teal-50 p-6 md:p-8 rounded-2xl max-w-5xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold text-teal-800 mb-6">
              바둑은 아이의 '두뇌 습관'을 바꿉니다
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              <div className="flex items-center justify-center p-3 md:p-4 bg-white rounded-lg">
                <span className="text-gray-700 text-sm md:text-base">문제를 스스로 풀고</span>
              </div>
              <div className="flex items-center justify-center p-3 md:p-4 bg-white rounded-lg">
                <span className="text-gray-700 text-sm md:text-base">감정을 다스리고</span>
              </div>
              <div className="flex items-center justify-center p-3 md:p-4 bg-white rounded-lg">
                <span className="text-gray-700 text-sm md:text-base">선택의 책임을 이해하고</span>
              </div>
              <div className="flex items-center justify-center p-3 md:p-4 bg-white rounded-lg">
                <span className="text-gray-700 text-sm md:text-base">복기하며 성찰하는 습관까지</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}