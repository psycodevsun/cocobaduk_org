
export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-900">
            왜 <span className="text-teal-600">코코바둑</span>을 선택하시나요?
          </h2>

          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            15년간 9,500명의 학생들과 함께한 검증된 온라인 바둑 교육
          </p>
        </div>

        {/* 메인 이미지 */}
        <div className="mb-16">
          <img
            src="/upimg/2.jpg"
            alt="코코바둑 소개 이미지"
            className="w-full max-w-5xl mx-auto rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* 3개 주요 특징 카드 */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* 1:1 맞춤 수업 - 사진3 */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-user-line text-3xl text-teal-600"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">1:1 맞춤 수업 / 1:2 정규 수업</h3>
            <p className="text-teal-600 font-medium mb-4">개별 맞춤형 지도</p>
            <ul className="space-y-2 text-left">
              <li className="flex items-center text-gray-700">
                <i className="ri-check-line text-teal-500 mr-3"></i>
                <span>학생별 맞춤 진도 관리</span>
              </li>
              <li className="flex items-center text-gray-700">
                <i className="ri-check-line text-teal-500 mr-3"></i>
                <span>개인 성향 분석 후 수업</span>
              </li>
              <li className="flex items-center text-gray-700">
                <i className="ri-check-line text-teal-500 mr-3"></i>
                <span>선생님과 1대1 지도대국</span>
              </li>
            </ul>

            <div className="mt-6">
              <img
                src="/upimg/3.jpg"
                alt="맞춤 수업 이미지"
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>

          {/* 누적 지도 학생수 - 사진4 */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-group-line text-3xl text-teal-600"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">누적 지도 학생수 9,500명+</h3>
            <p className="text-teal-600 font-medium mb-4">검증된 교육 경험</p>
            <ul className="space-y-2 text-left">
              <li className="flex items-center text-gray-700">
                <i className="ri-check-line text-teal-500 mr-3"></i>
                <span>15년간 축적된 노하우</span>
              </li>
              <li className="flex items-center text-gray-700">
                <i className="ri-check-line text-teal-500 mr-3"></i>
                <span>연령별 특성 파악</span>
              </li>
              <li className="flex items-center text-gray-700">
                <i className="ri-check-line text-teal-500 mr-3"></i>
                <span>체계적인 실력 향상 시스템</span>
              </li>
            </ul>

            <div className="mt-6">
              <img
                src="/upimg/4.jpg"
                alt="누적 지도 학생수 이미지"
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>

          {/* 수업 만족도 - 사진5 */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-star-fill text-3xl text-teal-600"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">수업 만족도 9.8</h3>
            <p className="text-teal-600 font-medium mb-4">높은 학부모 만족도</p>
            <ul className="space-y-2 text-left">
              <li className="flex items-center text-gray-700">
                <i className="ri-check-line text-teal-500 mr-3"></i>
                <span>학부모 98% 재수강</span>
              </li>
              <li className="flex items-center text-gray-700">
                <i className="ri-check-line text-teal-500 mr-3"></i>
                <span>친구 추천율 95%</span>
              </li>
              <li className="flex items-center text-gray-700">
                <i className="ri-check-line text-teal-500 mr-3"></i>
                <span>실력 향상 보장</span>
              </li>
            </ul>

            <div className="mt-6">
              <img
                src="/upimg/5.jpg"
                alt="수업 만족도 이미지"
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xl font-bold text-gray-800 mb-2">
            바둑을 처음 배울수록, 전문 원장님의 맞춤형 수업은 필수입니다.
          </p>
          <p className="text-lg text-gray-600">
            체계적인 커리큘럼과 개인별 맞춤 지도로 확실한 실력 향상을 약속드립니다.
          </p>
        </div>
      </div>
    </section>
  );
}
