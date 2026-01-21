
export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-title">
            학생과 학부모가 <span className="text-primary-emphasis">선택</span>한 코코바둑
          </h2>

          <p className="text-lg md:text-xl lg:text-lg tracking-body leading-relaxed mb-2">
            장기간 검증된 집중력·사고력 중심 온라인 바둑 교육
          </p>
        </div>

        {/* 메인 이미지 */}
        <div className="mb-16">
          <img
            src="/upimg/2.jpg"
            alt="코코바둑 소개 이미지"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* 3개 주요 특징 카드 */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* 1:1 맞춤 수업 - 사진3 */}
          <div className="bg-white rounded-xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
            <h3 className="text-2xl md:text-xl lg:text-lg text-primary-emphasis font-bold tracking-title mb-2">개별 맞춤형 지도</h3>
            <p className="text-base text-primary-muted mb-3 text-sm md:text-base tracking-body">#성향분석 #개별진도</p>
            <ul className="space-y-1 md:space-y-2 text-left">
              <li className="text-gray-700 text-sm md:text-base tracking-body">• 학생별 수준과 속도에 맞춘 진도 관리</li>
              <li className="text-gray-700 text-sm md:text-base tracking-body">• 개인 성향 분석 후 맞춤 수업 진행</li>
              <li className="text-gray-700 text-sm md:text-base tracking-body">• 선생님과 1:1 지도 대국</li>
            </ul>

            <div className="mt-4 md:mt-6">
              <img
                src="/upimg/3.jpg"
                alt="맞춤 수업 이미지"
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>

          {/* 누적 지도 학생수 - 사진4 */}
          <div className="bg-white rounded-xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
            <h3 className="text-2xl md:text-xl lg:text-lg text-primary-emphasis font-bold tracking-title mb-2">교육 경험 기반 시스템</h3>
            <p className="text-base text-primary-muted mb-3 text-sm md:text-base tracking-body">#누적학생 #9,500명+</p>
            <ul className="space-y-1 md:space-y-2 text-left">
              <li className="text-gray-700 text-sm md:text-base tracking-body">• 다년간 축적된 교육 노하우</li>
              <li className="text-gray-700 text-sm md:text-base tracking-body">• 연령별·단계별 학습 특성 분석</li>
              <li className="text-gray-700 text-sm md:text-base tracking-body">• 체계적인 실력 향상 시스템</li>
            </ul>

            <div className="mt-4 md:mt-6">
              <img
                src="/upimg/4.jpg"
                alt="누적 지도 학생수 이미지"
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>

          {/* 수업 만족도 - 사진5 */}
          <div className="bg-white rounded-xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
            <h3 className="text-2xl md:text-xl lg:text-lg text-primary-emphasis font-bold tracking-title mb-2">학부모가 체감한 변화</h3>
            <p className="text-base text-primary-muted mb-3 text-sm md:text-base tracking-body">#만족도9.8</p>
            <ul className="space-y-1 md:space-y-2 text-left">
              <li className="text-gray-700 text-sm md:text-base tracking-body">• 학부모 98% 재수강</li>
              <li className="text-gray-700 text-sm md:text-base tracking-body">• 친구 추천율 95%</li>
              <li className="text-gray-700 text-sm md:text-base tracking-body">• 눈에 보이는 성장 변화</li>
            </ul>

            <div className="mt-4 md:mt-6">
              <img
                src="/upimg/5.jpg"
                alt="수업 만족도 이미지"
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <span className="inline-block px-10 py-2 rounded-full bg-primary-emphasis">
            <p className="text-xl font-bold tracking-body text-white">
              바둑을 처음 배울수록, 아이에게 맞는 시작이 중요합니다.
            </p>
          </span>
        </div>
        <div className="text-center mt-2">
          <p className="text-lg tracking-body">
            아이의 변화를 직접 경험해보세요.
          </p>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm tracking-body text-neutral-900 mb-2">
            ※ 누적 지도 학생수, 재수강율, 추천율은 내부 운영 데이터 기준(2011년~2025년)입니다.
          </p>
        </div>
      </div>
    </section>
  );
}
