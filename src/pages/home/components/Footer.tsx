
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-16">
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
            <h3 className="text-3xl font-bold mb-4 text-teal-400">코코 바둑</h3>
            <p className="text-xl text-gray-300 mb-6">
              바둑으로 우리 아이의 두뇌가 자란다
            </p>

            {/* 핵심 메시지 */}
            <p className="text-xl font-bold text-amber-400 leading-relaxed mb-8">
              "지금 이 선택이 우리아이의 두뇌에 남을<br />
              가장 좋은 최상의 선택입니다"
            </p>

            {/* 연락처 */}
            <div className="p-6 bg-gray-700 rounded-xl">
              <h4 className="text-lg font-bold mb-4 text-teal-400">상담 문의</h4>
              <a href="tel:010-6753-8985" className="flex items-center text-2xl font-bold text-white hover:text-teal-400 transition-colors">
                <i className="ri-phone-fill mr-3"></i>
                010-6753-8985
              </a>
            </div>

            <div className="flex space-x-4 mt-6">
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

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 코코 바둑 온라인 바둑학원. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
