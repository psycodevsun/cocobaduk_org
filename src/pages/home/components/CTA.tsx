
export default function CTA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            온라인 바둑 교육의 <span className="text-teal-600">새로운 기준</span>
          </h2>

          {/* 체험수업 받고 판단하세요 섹션 */}
          <div className="flex justify-center mb-12">
            <div className="bg-amber-100 inline-flex items-center px-6 py-3 rounded-full">
              <i className="ri-gift-line text-2xl text-amber-600 mr-3"></i>
              <span className="text-xl font-bold text-amber-800">체험 수업 받고 판단하세요!</span>
            </div>
          </div>

          {/* 맞춤 상담 */}
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-5xl mx-auto">
            <div className="bg-teal-100 inline-flex items-center px-6 py-3 rounded-full mb-6">
              <i className="ri-customer-service-2-line text-2xl text-teal-600 mr-3"></i>
              <span className="text-xl font-bold text-teal-800">1:1 맞춤 체험수업</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">1:1 맞춤 체험수업</h3>

            {/* 가격 정보 */}
            <div className="mb-6">
              <div className="flex items-center justify-center mb-2">
                <span className="text-gray-400 line-through text-lg mr-3">60,000원</span>
                <span className="text-3xl font-bold text-teal-600">30,000원</span>
              </div>
              <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded-lg inline-block">
                <i className="ri-fire-line mr-2"></i>
                <span className="font-bold">50% 할인 이벤트 진행!</span>
              </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              학습 목표와 현재 상황에 맞는 개인별 맞춤 상담 제공
            </p>

            <a href="tel:010-6753-8985" className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer">
              체험수업 신청하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
