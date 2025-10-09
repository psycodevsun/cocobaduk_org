
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">코코 바둑</h3>
            <p className="text-gray-300 mb-4">
              바둑으로 우리 아이의 두뇌가 자란다
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">수업 특징</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <i className="ri-check-line text-green-400 mr-2"></i>
                1:1 맞춤 수업
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-green-400 mr-2"></i>
                원장 직강
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-green-400 mr-2"></i>
                AI 프로그램 연계
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-green-400 mr-2"></i>
                실력별 체계반 운영
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-green-400 mr-2"></i>
                9,500명+ 지도 경험
              </li>
            </ul>
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
