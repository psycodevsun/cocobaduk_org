export default function Pricing() {
  return (
    <section id="pricing" className="py-20" style={{ backgroundColor: '#F8EEE2' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <i className="ri-money-dollar-circle-line mr-3 text-green-600"></i>
            수강료 안내
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border-2 border-blue-200 p-8 rounded-xl shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4">
                <i className="ri-gift-line text-xl"></i>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-800">체험수업 (1시간)</h3>
                <p className="text-3xl font-bold text-blue-600 mt-2">30,000원</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-check-line text-2xl text-green-600"></i>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">1:1 실력진단</h4>
                <p className="text-sm text-gray-600">개별 맞춤 실력 분석</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-user-heart-line text-2xl text-blue-600"></i>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">성향 분석</h4>
                <p className="text-sm text-gray-600">학습 성향 파악</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-chat-3-line text-2xl text-purple-600"></i>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">맞춤 상담</h4>
                <p className="text-sm text-gray-600">전문가 학습 상담</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-6">정확한 수강료는 상담 시 안내드립니다</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors cursor-pointer whitespace-nowrap">
                <i className="ri-calendar-check-line mr-2"></i>
                체험수업 신청하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}