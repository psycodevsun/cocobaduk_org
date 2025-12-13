export default function Testimonials() {
  const targetAudience = [
    "아이가 집중력이 약해 걱정인 부모님",
    "수학, 추론력이 부족한 초등 저학년",
    "공부에 흥미를 느끼지 못하는 아이",
    "바둑을 좋아하지만 오프라인 학원 시간이 부담스러운 집",
    "온라인 수업으로도 진짜 효과를 보고 싶은 모든 부모님",
    "아이의 사고력과 창의력을 키워주고 싶은 부모님"
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#F8EEE2' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-white p-4 md:p-8 rounded-2xl shadow-lg max-w-5xl mx-auto mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">60분 체험수업</h3>
            <p className="text-lg text-gray-600 mb-4">1:1 대국 + 실력 진단 + 상담까지</p>
            <div className="text-4xl font-bold text-yellow-600 mb-4">단 30,000원</div>
            <p className="text-gray-600">수업 후, 우리 아이에게 꼭 맞는 반을 정확하게 편성해드립니다.</p>
          </div>
        </div>

        <div className="bg-white p-4 md:p-8 rounded-2xl shadow-lg mb-12 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            이런 분들께 특히 추천합니다!
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {targetAudience.map((item, index) => (
              <div key={index} className="flex items-center p-4 bg-teal-50 rounded-lg">
                <span className="text-teal-600 mr-3 flex-shrink-0">•</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-teal-600 text-white p-4 md:p-8 rounded-2xl max-w-5xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl font-bold" style={{fontFamily: 'Pacifico, serif'}}>
                코코 바둑 온라인 바둑학원
              </h2>
            </div>
            <p className="text-xl mb-6">
              오프라인의 불편함은 줄이고,<br />
              학습의 질은 더 높인 바둑 수업.
            </p>
            <div className="bg-yellow-400 text-gray-800 p-4 rounded-lg inline-block">
              <i className="ri-check-line mr-2"></i>
              <span className="font-bold">지금 이 선택이 우리 아이의 두뇌에 남을 가장 좋은 한 수입니다.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
