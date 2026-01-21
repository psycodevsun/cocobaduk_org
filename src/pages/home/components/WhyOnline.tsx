
export default function WhyOnline() {
  const reasons = [
    {
      number: "1",
      title: "이동시간은 줄이고, 집중은 수업에만",
      points: [
        "학원 이동 없이 집에서 바로 시작하는 온라인 바둑수업",
        "아이 혼자 집중하는 환경으로, 수업에만 온전히 몰입",
        "오프라인처럼 수업 태도를 잡는 데 시간을 쓰지 않아",
        "수업은 시작부터 흐름이 끊기지 않습니다."
      ],
      color: "bg-neutral-50"
    },
    {
      number: "2",
      title: "온라인 바둑수업, 왜 실력이 더 빠르게 오를까요?",
      points: [
        "실시간 1:1 대국으로  즉각적인 피드백",
        "아이 표정·시선·마우스 움직임까지 한눈에 확인",
        "이론 수업 → 실전 바둑 → 복기 한 흐름으로 이어지는 수업 구성"
      ],
      color: "bg-neutral-50"
    },
    {
      number: "3",
      title: "반포에서 정원 마감으로 검증된 수업",
      points: [
        "반포에서 늘 정원 마감되던 수업을 이제",
        "집에서 그대로 경험합니다.",
        "반포에서 검증된 교육 방식 그대로 우리 아이도 같은 수업,",
        "같은 지도 방식으로 배웁니다."
      ],
      color: "bg-neutral-50"
    },
    {
      number: "4",
      title: "승부욕이 강한 우리 아이, 바둑으로 이렇게 달라졌어요",
      points: [
        "지는 순간 울고 화내던 아이가",
        "이제는 감정을 가라앉히고 어디를 고치면 될지 생각합니다.",
      ],
      quote: "“엄마, 나 이제 중요한 순간엔 천천히 두면 더 잘할 수 있을 것 같아.”",
      color: "bg-neutral-50"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-title">
            왜 온라인 바둑수업일까요?
          </h2>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className={`${reason.color} p-6 md:p-8 rounded-2xl`}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 hidden md:block">
                  <div className="w-10 h-10 bg-primary-emphasis text-white rounded-full flex items-center justify-center font-bold text-2xl">
                    <p className="mb-1">
                      {reason.number}
                    </p>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl lg:text-xl font-bold text-primary-emphasis tracking-title leading-title mb-5">{reason.title}</h3>

                  <div>
                    {reason.points.map((point, pointIndex) => (
                      <p
                        key={pointIndex}
                        className="text-lg lg:text-base tracking-body leading-caption md:leading-caption"
                      >
                        {point}
                      </p>
                    ))}

                    {reason.quote && (
                      <p className="mt-4 text-lg lg:text-base tracking-body leading-caption text-primary-emphasis font-medium">
                        {reason.quote}
                      </p>
                    )}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary-emphasis p-6 md:p-8 rounded-2xl max-w-5xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl tracking-title text-white mb-6">
              바둑은 아이의 <span className="font-bold text-pt-w100">두뇌 습관</span>을 바꿉니다
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              <div className="flex items-center justify-center p-3 md:p-4 bg-white rounded-lg">
                <span className="text-sm md:text-lg lg:text-base tracking-body">문제를 스스로 해결하는 힘</span>
              </div>
              <div className="flex items-center justify-center p-3 md:p-4 bg-white rounded-lg">
                <span className="text-sm md:text-lg lg:text-base tracking-body">감정조절하며 생각하는 과정</span>
              </div>
              <div className="flex items-center justify-center p-3 md:p-4 bg-white rounded-lg">
                <span className="text-sm md:text-lg lg:text-base tracking-body">선택에 책임지는 사고 습관</span>
              </div>
              <div className="flex items-center justify-center p-3 md:p-4 bg-white rounded-lg">
                <span className="text-sm md:text-lg lg:text-base tracking-body">복기하며 되돌아보는 태도</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
