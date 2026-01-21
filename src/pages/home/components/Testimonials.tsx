export default function Testimonials() {
  const targetAudience = [
    "아이가 집중이 짧고, 수업 태도 때문에 늘 고민이신 분",
    "지면 화내거나 쉽게 포기해 감정 조절이 필요한 아이",
    "초등 저학년 시기, 수학·추론력의 기초를 탄탄히 잡고 싶은 분",
    "아이가 공부에 흥미를 느끼지 못해 방법을 찾고 계신 분",
    "바둑은 시키고 싶지만 오프라인 이동과 일정이 부담스러운 분",
    "온라인 수업으로도 확실한 교육 효과를 기대하시는 분"
  ];

  return (
    <section className="py-20 bg-surface-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-white p-4 md:p-8 rounded-2xl shadow-lg max-w-5xl mx-auto mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">1시간 체험수업</h3>
            <p className="text-lg text-gray-600 mb-4">1:1 대국 + 실력 진단 + 상담까지</p>
            <div className="text-4xl font-bold text-yellow-600 mb-4">단 30,000원</div>
            <p className="text-gray-600">지금, 부담 없이 시작해보세요</p>
          </div>
        </div>

        <div className="p-4 md:p-8 mb-12 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl tracking-title text-center mb-10">
            이런 분들께 <span className="font-bold">추천합니다</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {targetAudience.map((item, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg">
                <span className="mr-3 flex-shrink-0">•</span>
                <span className="tracking-body">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-primary-emphasis text-white p-4 md:p-8 rounded-2xl max-w-5xl mx-auto">
            <div className="mb-2">
              <h3 className="text-3xl font-bold tracking-title">
                코코 바둑 온라인 바둑학원
              </h3>
            </div>
            <p className="text-lg mb-3 tracking-body">
              오프라인의 불편함은 줄이고, 학습의 질은 더 높이다
            </p>
            <div className="text-center">
              <span className="inline-block px-10 py-3 rounded-full bg-surface-warm">
                <p className="text-3xl font-bold tracking-body text-pt-b300">
                  집에서 편하게! 결과는 확실하게
              </p>
              </span>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
