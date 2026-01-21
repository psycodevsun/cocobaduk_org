
export default function Hero() {
  return (
    <section id="home" className="relative min-h-[520px] md:h-[750px] lg:h-[600px] text-gray-800 flex items-center overflow-hidden pt-16 pb-0 lg:pb-8 bg-surface-warm">

      <div className="relative z-10 max-w-7xl mx-auto md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
          <div className="text-left z-99">
            <div className="px-6 md:px-0 mt-5 lg:mt-0 mb-1 md:mb-3">
              <h2 className="text-2xl md:text-3xl tracking-title mb-2">
                온라인 No.1 코코바둑
              </h2>
            </div>

            <div className="px-6 md:px-0 mb-4 md:mb-6 lg:mb-8">
              <h1 className="text-4xl  md:text-5xl lg:text-5xl font-bold tracking-title mb-3 leading-tight tracking-body">
                바둑으로 집중력이 <span className="text-primary-emphasis">쑥쑥</span>
              </h1>
            </div>

            <p className="px-6 md:px-0 text-lg md:text-xl lg:text-lg mb-2 leading-relaxed tracking-body">
              집중력 · 판단력 · 수리력 성장을 한 번에
            </p>

            {/*<div className="flex flex-col sm:flex-row gap-3 mb-2">
              <a href="tel:010-6753-8985" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-bold text-lg transition-colors cursor-pointer whitespace-nowrap text-center">
                <i className="ri-phone-fill mr-2"></i>
                체험수업 신청하기
              </a>
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-1 rounded-lg font-bold text-lg transition-colors cursor-pointer whitespace-nowrap">
                <i className="ri-message-3-fill mr-2"></i>
                카카오톡 상담
              </button>
            </div>*/}

            {/*<div className="text-center lg:text-left">
              <a href="tel:010-6753-8985" className="inline-flex items-center gap-3 text-gray-600 hover:text-gray-800 transition-colors">
                <i className="ri-phone-fill text-2xl"></i>
                <span className="text-xl lg:text-xl">010-6753-8985</span>
              </a>
            </div>*/}
          
          </div>

          {/* 모바일 이미지 */}
          <div className="w-full lg:hidden">
            <img
              src="/upimg/12.jpg"
              alt="바둑 교육 이미지"
              className="w-full h-full object-cover scale-[1.2]"
            />
          </div>

          {/* PC 이미지 */}
          <div className="hidden lg:flex justify-center items-center h-full pt-14">
            <img
              src="/upimg/12.jpg"
              alt="바둑 교육 이미지"
              className="w-full h-full object-cover scale-[1.55]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
