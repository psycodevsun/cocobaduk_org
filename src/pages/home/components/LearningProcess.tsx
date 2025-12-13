
export default function LearningProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <i className="ri-book-open-line mr-3 text-teal-600"></i>
            코코바둑 등록절차
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* STEP 1 */}
          <div className="bg-teal-50 p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-bold mr-3">STEP 1</span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-teal-800 mb-4">1:1 맞춤 체험수업</h3>
            <div className="text-gray-700 space-y-3">
              <p>체험수업에서는</p>
              <ul className="space-y-2 ml-2">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">·</span>
                  <span>바둑판을 어떻게 관찰하는지</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">·</span>
                  <span>좋은 수를 어떻게 찾아내는지를 배우고</span>
                </li>
              </ul>
              <p>원장님과 직접 한판의 바둑을 두며 아이의 실력과 성향에 맞춘 맞춤형 1교시 수업으로 경험합니다.</p>
              <p className="text-sm text-gray-600">처음 배우는 아이부터 경험이 있는 아이까지 모두 편안하고 자연스럽게 참여할 수 있습니다.</p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="bg-teal-50 p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-bold mr-3">STEP 2</span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-teal-800 mb-4">체험수업 분석 및 상담 피드백 제공</h3>
            <div className="text-gray-700 space-y-3">
              <p>체험수업 후에는 학부모님께 다음 내용을 상세하게 안내드립니다.</p>
              <ul className="space-y-2 ml-2">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">·</span>
                  <span>아이의 바둑 능력+성향 및 집중 패턴</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">·</span>
                  <span>앞으로의 학습 목표와 달성 예상 기간</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">·</span>
                  <span>바둑 선수자격증 취득 가능 시기 및 예상 기간</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600">학부모님이 가장 궁금해하는 내용을, 객관적인 기준에 따라 명확하게 설명드립니다.</p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="bg-teal-50 p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-bold mr-3">STEP 3</span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-teal-800 mb-4">우리 아이 맞춤 반 배정</h3>
            <div className="text-gray-700 space-y-3">
              <p>코코바둑은 아래 3가지 기준을 종합하여 우리 아이에게 가장 적합한 반으로 편성합니다.</p>
              <ul className="space-y-2 ml-2">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2 font-bold">1.</span>
                  <span>실력</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2 font-bold">2.</span>
                  <span>나이</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2 font-bold">3.</span>
                  <span>성향 및 학습 스타일</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600">이 기준을 기반으로 아이의 성장 속도와 강점에 가장 잘 맞는 맞춤형 반 편성을 제공합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
