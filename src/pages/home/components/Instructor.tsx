
export default function Instructor() {
  const whyCocoReason = [
    {
      title: "바둑교육 + 어린이 교육심리 전문가의 직강",
      content: [
        "좋은 바둑 선생님은 두 가지를 모두 알아야 합니다.",
        "바둑 교육법 + 어린이 교육심리",
        "코코바둑은 이 두 가지 전문성을 갖춘",
        "유일한 온라인 바둑교육입니다."
      ]
    },
    {
      title: "소수정예 / 초밀착 관리",
      content: [
        "1:1 또는 1:2 그룹반 선택가능한 초밀착 수업",
        "아이의 작은 변화까지 잡아내는 세심한 맞춤 지도",
        "단체수업에서는 절대 불가능한 개별 케어로 실력이 훨씬 빨리 오릅니다."
      ]
    },
    {
      title: "우리아이 맞춤 커리큘럼+성장 로드맵",
      content: [
        "23년 경력으로 만든 '우리 아이 맞춤' 커리큘럼",
        "모든 아이에게 같은 수업은 없습니다.",
        "아이의 속도에 맞춰 매월 교육 목표 설정",
        "입문 → 초급 → 중급 → 고급 → 기사 → 유단자까지",
        "성장 로드맵을 공유해드립니다."
      ]
    }
  ];

  return (
    <section id="instructor" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-2">
            <i className="ri-user-star-line mr-3 text-teal-600"></i>
            원장 직강,
          </h2>
          <h2 className="text-3xl lg:text-4xl font-bold">
            차원이 다른 교육
          </h2>
        </div>

        {/* 윤정희 원장님 소개 섹션 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* 사진 왼쪽 */}
            <div>
              <img
                src="/upimg/6.JPEG"
                alt="윤정희 원장"
                className="w-full rounded-2xl object-cover object-top shadow-lg"
              />
            </div>

            {/* 경력 내용 오른쪽 */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-teal-700">윤정희 원장</h3>

              <div className="space-y-2 text-gray-700">
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>코코바둑 반포점 관리원장</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>메타바둑 서초점 관리원장</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>바둑경력 23년</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>바둑교육경력 15년</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>명지대학교 바둑학과 전체 수석입학/졸업</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>명지대학교 바둑학과 석박사 우수 신입생 선발</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>바둑학 석사</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>바둑학 박사 전공</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>바둑채널 방송국 바둑 캐스터</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>메타바둑 교육브랜드 창립</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>해군사관학교 바둑 수업 진행</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>바둑TV채널 &lt;GS칼텍스배 바둑기전&gt; 리포터 데뷔</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>K-바둑 채널 &lt;삼성화재배 월드바둑 마스터스&gt; 진행</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>K-바둑 채널 &lt;바둑비타민 시즌4&gt; MC 진행</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>K-바둑 채널 &lt;바둑비타민 시즌5&gt; MC 진행</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>Google 구글 딥마인드 &lt;이세돌 알파고 챌린지 매치&gt; 생중계 진행</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>&lt;우리금융그룹배&gt; 어린이 바둑왕전 MC진행</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>바둑TV채널 어린이 바둑교육 프로그램 진행</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>&lt;어서와 바둑은 처음이지&gt; 바둑교육 프로그램 MC진행</p>
              </div>
            </div>
          </div>
        </div>

        {/* 임동준 원장님 소개 섹션 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* 사진 왼쪽 */}
            <div>
              <img
                src="/upimg/7.jpg"
                alt="임동준 원장"
                className="w-full rounded-2xl object-cover object-top shadow-lg"
              />
            </div>

            {/* 경력 내용 오른쪽 */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-teal-700">임동준 원장</h3>

              <div className="space-y-2 text-gray-700">
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>바둑 경력 30년</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>바둑 교육 경력 13년</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>강남 미키 바둑학원 원장</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>강남 미생 어린이 바둑학원 부원장</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>명지대학교 바둑학과 전공</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>명지대학교 사회교육원 바둑학 전공</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>강남 미생 성인 바둑학원 부원장</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>명지아카데미 어린이 전문반 지도</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>청재바둑학원 바둑 영재반 전문 지도</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>잠실메타바둑학원 온라인 수업 수석 강사</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>청솔초등학교 논리력 향상 바둑 수업 지도 교사</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>풍양초등학교 집중력 향상 바둑 프로그램 지도 교사</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>개원초등학교 판단력 향상 바둑 프로그램 지도 교사</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>초림초등학교 수리력 향상 바둑 프로그램 지도 교사</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>불정초등학교 창의력 향상 바둑 프로그램 지도 교사</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>미생바둑 전국바둑대회 우승</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>성남시 바둑연합회장배 유단자부 3위</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>명지대학교 총장배 바둑대회 4위</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>유창혁 바둑도장배 유단자부 입상</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>인공지능 전문 바둑교육 지도 자격증</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>AI 바둑 유아교육 전문 과정 수료</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>AI 바둑교육 전문 지도사 과정 수석 수료</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>AI 바둑 어린이 전문 커리큘럼과정 개발</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>스포츠바둑지도사 1급 / 바둑지도사 2급</p>
                <p className="flex items-start"><span className="text-teal-500 mr-2">•</span>대한바둑협회 공인 5단</p>
              </div>
            </div>
          </div>
        </div>

        {/* 코코바둑을 선택하는 이유 섹션 */}
        <div className="bg-teal-50 rounded-2xl p-8">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-10 text-teal-800">
            코코바둑을 선택하는 이유
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {whyCocoReason.map((reason, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold mr-3">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-bold text-teal-700">{reason.title}</h4>
                </div>
                <div className="space-y-2">
                  {reason.content.map((line, lineIndex) => (
                    <p key={lineIndex} className="text-gray-700 text-sm leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
