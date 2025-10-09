
export default function Features() {
  const features = [
    {
      icon: 'ri-user-line',
      title: '1:1 맞춤 수업 / 1:2 정규 수업',
      description: '개별 맞춤형 지도',
      details: [
        '학생별 맞춤 진도 관리',
        '개인 성향 분석 후 수업',
        '선생님과 1대1 지도대국'
      ]
    },
    {
      icon: 'ri-group-line',
      title: '누적 지도 학생수 9,500명+',
      description: '검증된 교육 경험',
      details: [
        '15년간 축적된 노하우',
        '연령별 특성 파악',
        '체계적인 실력 향상 시스템'
      ]
    },
    {
      icon: 'ri-star-fill',
      title: '수업 만족도 9.8',
      description: '높은 학부모 만족도',
      details: [
        '학부모 98% 재수강',
        '친구 추천율 95%',
        '실력 향상 보장'
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-900">
            왜 <span className="text-blue-600">코코바둑</span>을 선택하시나요?
          </h2>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              15년간 9,500명의 학생들과 함께한 검증된 온라인 바둑 교육
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-100 rounded-xl p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">NO.1</div>
                <div className="text-lg font-semibold text-green-800">온라인 바둑수업</div>
                <div className="text-sm text-green-700 mt-1">업계 최고 수준</div>
              </div>
              
              <div className="bg-blue-100 rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">9,500+</div>
                <div className="text-lg font-semibold text-blue-800">누적 지도학생</div>
                <div className="text-sm text-blue-700 mt-1">15년간 축적된 노하우</div>
              </div>
              
              <div className="bg-purple-100 rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">9.8/10</div>
                <div className="text-lg font-semibold text-purple-800">수업 만족도</div>
                <div className="text-sm text-purple-700 mt-1">학부모 98% 재수강</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <i className="ri-check-line"></i>
            NO.1 온라인 바둑수업
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${feature.icon} text-3xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-blue-600 font-medium">{feature.description}</p>
              </div>
              
              <ul className="space-y-3">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <i className="ri-check-line text-green-500 mr-3"></i>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
