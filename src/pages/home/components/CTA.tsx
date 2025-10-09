
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            온라인 바둑 교육의 <span className="text-blue-600">새로운 기준</span>
          </h2>
          
          {/* 3개 항목을 중앙 정렬로 배치 */}
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8 mb-12">
            {/* 체험수업 */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex-1 max-w-sm">
              <div className="bg-blue-100 inline-flex items-center px-6 py-3 rounded-full mb-6">
                <i className="ri-time-line text-2xl text-blue-600 mr-3"></i>
                <span className="text-xl font-bold text-blue-800">체험수업 (1시간)</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">무료 체험수업</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                실제 수업을 1시간 동안 무료로 체험해보세요. 우리의 교육 방식이 어떤지 직접 확인할 수 있습니다.
              </p>
            </div>

            {/* 실력진단 */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex-1 max-w-sm">
              <div className="bg-green-100 inline-flex items-center px-6 py-3 rounded-full mb-6">
                <i className="ri-search-line text-2xl text-green-600 mr-3"></i>
                <span className="text-xl font-bold text-green-800">실력진단</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">정확한 실력 분석</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                현재 바둑 실력을 정확히 파악하여 맞춤형 학습 계획을 제공합니다.
              </p>
            </div>

            {/* 성향 분석 */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex-1 max-w-sm">
              <div className="bg-purple-100 inline-flex items-center px-6 py-3 rounded-full mb-6">
                <i className="ri-user-heart-line text-2xl text-purple-600 mr-3"></i>
                <span className="text-xl font-bold text-purple-800">성향 분석</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">학습 성향 파악</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                개인의 학습 스타일과 성향을 분석하여 최적의 교육 방법을 찾아드립니다.
              </p>
            </div>
          </div>

          {/* 체험수업 받고 판단하세요 섹션를 맨 아래 중앙에 배치 */}
          <div className="flex justify-center mb-12">
            <div className="bg-yellow-100 inline-flex items-center px-6 py-3 rounded-full">
              <i className="ri-gift-line text-2xl text-yellow-600 mr-3"></i>
              <span className="text-xl font-bold text-yellow-800">체험 수업 받고 판단하세요!</span>
            </div>
          </div>

          {/* 맞춤 상담 */}
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
            <div className="bg-orange-100 inline-flex items-center px-6 py-3 rounded-full mb-6">
              <i className="ri-customer-service-2-line text-2xl text-orange-600 mr-3"></i>
              <span className="text-xl font-bold text-orange-800">1:1 맞춤 체험수업</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">1:1 맞춤 체험수업</h3>
            
            {/* 가격 정보 */}
            <div className="mb-6">
              <div className="flex items-center justify-center mb-2">
                <span className="text-gray-400 line-through text-lg mr-3">60,000원</span>
                <span className="text-3xl font-bold text-red-600">30,000원</span>
              </div>
              <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg inline-block">
                <i className="ri-fire-line mr-2"></i>
                <span className="font-bold">50% 할인 이벤트 진행!</span>
              </div>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              학습 목표와 현재 상황에 맞는 개인별 맞춤 상담 제공
            </p>
            
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-7

00 transition-colors whitespace-nowrap cursor-pointer">
              체험수업 신청하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
