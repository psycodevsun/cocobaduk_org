
export default function Instructor() {
  const qualifications = [
    {
      category: "바둑 전문가 + 교육 전문가",
      items: [
        "바둑 전공 + 전문 경력",
        "수많은 입단자·유단자 배출"
      ]
    },
    {
      category: "소수정예 운영",
      items: [
        "1:1 체험수업 → 1:2 정규수업",
        "단체 위주의 가성비 수업과는 다른,",
        "우리 아이만을 위한 체계적 지도"
      ]
    },
    {
      category: "정규수업과 동일한 체험수업",
      items: [
        "1시간 동안 진행되는 맞춤형 1:1 수업",
        "아이 실력·성향 정확히 진단",
        "학습 목표 설정 + 진도 관리"
      ]
    }
  ];

  return (
    <section id="instructor" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <i className="ri-user-star-line mr-3 text-blue-600"></i>
            원장 직강, 차원이 다른 교육
          </h2>
        </div>
        
        {/* 윤정희 원장님 소개 섹션 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <i className="ri-user-star-line"></i>
                전문 원장 직강
              </div>
              <h3 className="text-2xl font-bold mb-3">윤정희 원장</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-700 text-sm">
                  <i className="ri-medal-line text-yellow-500 mr-2"></i>
                  <span>한국기원 5단 공인 자격</span>
                </div>
                <div className="flex items-center text-gray-700 text-sm">
                  <i className="ri-graduation-cap-line text-blue-500 mr-2"></i>
                  <span>명지대학교 바둑학과 석박사 우수 신입생 선발</span>
                </div>
                <div className="flex items-center text-gray-700 text-sm">
                  <i className="ri-time-line text-green-500 mr-2"></i>
                  <span>바둑 교육 경력 15년 · 바둑 경력 23년</span>
                </div>
              </div>
              
              {/* 주요 경력 */}
              <div className="bg-blue-50 p-3 rounded-lg mb-3">
                <h4 className="font-semibold text-blue-800 mb-1 text-sm">주요 경력</h4>
                <ul className="text-xs text-blue-700 space-y-0.5">
                  <li>• 코코바둑 반포점 관리원장</li>
                  <li>• 메타바둑 서초점 관리원장</li>
                  <li>• 명지대학교 바둑학과 수석입학/졸업</li>
                  <li>• 바둑학 석사 · 박사 전공</li>
                </ul>
              </div>
              
              {/* 방송 및 미디어 활동 */}
              <div className="bg-purple-50 p-3 rounded-lg mb-4">
                <h4 className="font-semibold text-purple-800 mb-1 text-sm">방송 및 미디어 활동</h4>
                <ul className="text-xs text-purple-700 space-y-0.5">
                  <li>• 바둑채널 방송국 바둑 캐스터</li>
                  <li>• K-바둑 채널 바둑비타민 시즌4, 5 MC</li>
                  <li>• Google 딥마인드 이세돌 vs 알파고 생중계 진행</li>
                  <li>• 어서와 바둑은 처음이지 교육 프로그램 MC</li>
                </ul>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-sm">
                "모든 아이는 각자의 속도로 성장합니다. 바둑을 통해 아이들의 사고력과 집중력을 키우는 것이 저의 사명입니다."
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="/images/41ed89a1dffdb555c23056b748e2c6fa.jfif"
                alt="윤정희 원장"
                className="w-full h-[500px] rounded-2xl mx-auto object-cover object-top shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* 임동준 원장님 소개 섹션 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <img 
                src="/images/0b4c1a9c6020330df58791bf168bb69b.jfif"
                alt="임동준 원장"
                className="w-full h-[500px] rounded-2xl mx-auto object-cover object-top shadow-lg"
              />
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <i className="ri-user-star-line"></i>
                전문 원장 직강
              </div>
              <h3 className="text-2xl font-bold mb-3">임동준 원장</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-700 text-sm">
                  <i className="ri-medal-line text-yellow-500 mr-2"></i>
                  <span>대한바둑협회 공인 아마추어 5단</span>
                </div>
                <div className="flex items-center text-gray-700 text-sm">
                  <i className="ri-graduation-cap-line text-blue-500 mr-2"></i>
                  <span>명지대학교 바둑학과 전공 (국내 유일)</span>
                </div>
                <div className="flex items-center text-gray-700 text-sm">
                  <i className="ri-time-line text-green-500 mr-2"></i>
                  <span>바둑 교육 경력 13년 · 바둑 경력 23년</span>
                </div>
              </div>
              
              {/* 주요 경력 */}
              <div className="bg-green-50 p-3 rounded-lg mb-3">
                <h4 className="font-semibold text-green-800 mb-1 text-sm">주요 경력</h4>
                <ul className="text-xs text-green-700 space-y-0.5">
                  <li>• 강남 미키 바둑학원 원장</li>
                  <li>• 강남 미생 어린이/성인 바둑학원 부원장</li>
                  <li>• 잠실메타바둑학원 온라인 수업 수석 강사</li>
                  <li>• 명지아카데미 어린이 전문반 지도</li>
                </ul>
              </div>
              
              {/* 초등학교 바둑 프로그램 지도 */}
              <div className="bg-orange-50 p-3 rounded-lg mb-3">
                <h4 className="font-semibold text-orange-800 mb-1 text-sm">초등학교 바둑 프로그램 지도</h4>
                <ul className="text-xs text-orange-700 space-y-0.5">
                  <li>• 청솔초등학교 논리력 향상 바둑 수업</li>
                  <li>• 풍양초등학교 집중력 향상 바둑 프로그램</li>
                  <li>• 개원초등학교 판단력 향상 바둑 프로그램</li>
                  <li>• 초림초등학교 수리력 향상 바둑 프로그램</li>
                </ul>
              </div>

              {/* 주요 대회 성과 */}
              <div className="bg-yellow-50 p-3 rounded-lg mb-4">
                <h4 className="font-semibold text-yellow-800 mb-1 text-sm">주요 대회 성과</h4>
                <ul className="text-xs text-yellow-700 space-y-0.5">
                  <li>• 미생바둑 전국바둑대회 우승</li>
                  <li>• 성남시 바둑연합회장배 유단자부 3위</li>
                  <li>• 명지대학교 총장배 바둑대회 4위</li>
                </ul>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-sm">
                "체계적인 교육과 개인별 맞춤 지도를 통해 아이들의 잠재력을 최대한 끌어내는 것이 저의 교육 철학입니다."
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-7 flex items-center">
            <img 
              src="/images/e0d317eada75a5c0682a5e757662c7a8.jfif"
              alt="온라인 바둑 수업 환경"
              className="w-full h-[600px] rounded-xl shadow-lg object-cover object-top"
            />
          </div>
          
          <div className="lg:col-span-5 space-y-8 h-[600px] flex flex-col justify-between">
            {qualifications.map((qual, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md flex-1 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-blue-600">{qual.category}</h3>
                </div>
                <ul className="space-y-2">
                  {qual.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <i className="ri-check-line text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
