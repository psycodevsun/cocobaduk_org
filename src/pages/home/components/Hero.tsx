
export default function Hero() {
  return (
    <section id="home" className="relative min-h-[600px] lg:h-[600px] text-gray-800 flex items-center overflow-hidden pt-16 pb-8 lg:pb-0" style={{ backgroundColor: '#F8EEE2' }}>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
          <div className="text-left">
            <div className="mb-4">
              <h1 className="text-3xl lg:text-5xl font-bold mb-2 leading-tight">
                온라인 프리미엄 <span className="text-teal-500">바둑학원</span>
              </h1>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-700">
                코코바둑
              </h2>
            </div>

            <p className="text-lg lg:text-xl mb-6 leading-relaxed text-gray-700">
              집중력 · 판단력 · 사고력 성장<br />
              1:1 맞춤 수업 / 1:2 소수정예 수업 선택 가능
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a href="tel:010-6753-8985" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors cursor-pointer whitespace-nowrap text-center">
                <i className="ri-phone-fill mr-2"></i>
                체험수업 신청하기
              </a>
              <button className="border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors cursor-pointer whitespace-nowrap">
                <i className="ri-message-3-fill mr-2"></i>
                카카오톡 상담
              </button>
            </div>

            <div className="text-center lg:text-left">
              <a href="tel:010-6753-8985" className="inline-flex items-center gap-3 text-teal-600 hover:text-teal-700 transition-colors">
                <i className="ri-phone-fill text-3xl"></i>
                <span className="text-3xl lg:text-4xl font-bold">010-6753-8985</span>
              </a>
            </div>
          </div>

          {/* 모바일 이미지 */}
          <div className="flex lg:hidden justify-center items-center">
            <img
              src="/upimg/1.jpg"
              alt="바둑 교육 이미지"
              className="w-full max-w-md rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* PC 이미지 */}
          <div className="hidden lg:flex justify-center items-center h-full">
            <img
              src="/images/54b878c7ed332ae64c79b4d9eb942cd5.png"
              alt="바둑 교육 이미지"
              className="w-full h-full object-cover scale-[1.35]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
