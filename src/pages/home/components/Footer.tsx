
export default function Footer() {
  return (
    <footer className="bg-pt-b300 text-white pt-6 pb-16 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 왼쪽: 사진 */}
          <div>
            <img
              src="/upimg/11.jpg"
              alt="코코바둑 이미지"
              className="w-full rounded-xl object-cover"
            />
          </div>

          {/* 오른쪽: 설명 및 연락처 */}
          <div className="flex flex-col justify-center h-full">
            <div className="mb-8">
              <h3 className="text-3xl font-bold tracking-title mb-3">코코 바둑</h3>
              <p className="text-lg text-white tracking-body">우리 아이를 위한 최고의 선택!</p>
              <p className="text-lg text-white tracking-body">코코바둑에서 지금 바로 시작하세요!</p>
            </div>

            {/* 연락처 */}
            <div className="px-6 py-5 bg-white rounded-xl">
              <h4 className="text-xl text-pt-b300 font-bold tracking-body">지금 바로 전화 주세요</h4>
              <a href="tel:010-6753-8985" className="flex items-center text-3xl text-pt-b200 font-bold tracking-body">
                {/*<i className="ri-phone-fill mr-3"></i>*/}
                010-6753-8985
              </a>
            </div>

            <div className="flex space-x-4 mt-8">
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white mt-12 pt-8 text-center">
          <p className="text-2xl font-bold text-white tracking-body mb-2">
            우리 아이를 위한 바둑수업 코코바둑
            <span className="text-pt-b400"> 아이에게 맞는 수업인지 직접 확인해보세요</span>
          </p>
          <p className="text-sm text-white tracking-body">
            © 2025 코코 바둑 온라인 바둑학원. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
