
export default function LearningProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl tracking-title mb-6">
            코코바둑 <span className="font-bold">수강안내</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* STEP 1 */}
          <div className="bg-neutral-100 p-4 md:p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="bg-primary-emphasis text-white px-4 py-2 rounded-full text-sm font-bold mr-3">STEP 1</span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-primary-emphasis tracking-title mb-7">1:1 맞춤 체험수업</h3>
            <div>
              <p className="tracking-body mb-7">체험수업을 통해</p>
              <div className="mb-7">
                <p className="tracking-body">바둑판을 관찰하는 방법</p>
                <p className="tracking-body">좋은 수를 찾는 사고 과정</p>  
              </div>
              <div className="mb-3">
                <p className="tracking-body">원장님과 직접 대국하며 아이의 실력과 성향을 파악</p>
                <p className="tracking-body">처음 바둑을 배우는 아이도 부담 없이 참여 가능</p>  
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="bg-neutral-100 p-4 md:p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="bg-primary-emphasis text-white px-4 py-2 rounded-full text-sm font-bold mr-3">STEP 2</span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-primary-emphasis tracking-title mb-7">체험수업 분석 & 상담</h3>
            <div>
              <p className="tracking-body mb-7">체험수업을 바탕으로</p>
              <ul className="mb-7">
                <li className="flex items-start">
                  <span className="tracking-body mr-2">·</span>
                  <span>아이의 실력 · 성향 · 집중 패턴</span>
                </li>
                <li className="flex items-start">
                  <span className="tracking-body mr-2">·</span>
                  <span>학습 목표 및 예상 성장 과정</span>
                </li>
                <li className="flex items-start">
                  <span className="tracking-body mr-2">·</span>
                  <span>선수 자격증 취득 가능 시기</span>
                </li>
              </ul>
              <p className="tracking-body mb-3">아이의 수업 모습을 바탕으로 맞춤 피드백 제공</p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="bg-neutral-100 p-4 md:p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="bg-primary-emphasis text-white px-4 py-2 rounded-full text-sm font-bold mr-3">STEP 3</span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-primary-emphasis mb-7">맞춤 반 배정</h3>
            <div>
              <p className="tracking-body mb-7">아이에게 중요한 기준을 우선순위로 반영해 반 추천</p>
              <ul className="mb-7">
                <li className="flex items-start">
                  <span className="tracking-body mr-2">1순위 · 실력</span>
                </li>
                <li className="flex items-start">
                  <span className="tracking-body mr-2">2순위 · 나이 및 또래 구성</span>
                </li>
                <li className="flex items-start">
                  <span className="tracking-body mr-2">3순위 · 성향 및 학습 스타일</span>
                </li>
              </ul>
              <div className="mb-3">
                <p className="tracking-body">아이의 성장 속도에 맞춰</p>
                <p className="tracking-body">가장 적합한 반으로 배정합니다.</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
