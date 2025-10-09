
export default function LearningProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <i className="ri-book-open-line mr-3 text-blue-600"></i>
            수업 진행 과정
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Step 1 */}
          <div className="bg-blue-50 p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">Step 1</span>
              <h3 className="text-xl lg:text-2xl font-bold text-blue-800">1:1 체험수업 & 상담 (1시간)</h3>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              직접 대국 → 실력/성향 분석 → 맞춤 반 편성
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-blue-50 p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">Step 2</span>
              <h3 className="text-xl lg:text-2xl font-bold text-blue-800">정규 수업 시작</h3>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Zoom 실시간 수업 + AI 복습
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="ri-check-line text-green-500 mr-2"></i>
                <span className="text-gray-700">반 정원: 1:1 or 1:2 선택 가능</span>
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-green-500 mr-2"></i>
                <span className="text-gray-700">주 1회 / 주 3회 선택</span>
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-green-500 mr-2"></i>
                <span className="text-gray-700">원장 직강, 매시간 실전 대국</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg">
            <i className="ri-time-line mr-2"></i>
            <span className="font-medium">수업 시간: 1타임 = 45분 기준</span>
          </div>
        </div>
      </div>
    </section>
  );
}
