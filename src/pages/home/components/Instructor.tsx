
export default function Instructor() {
  const whyCocoReason = [
    {
      title: "유아 교육심리 전문가의 직강",
      content: [
        "바둑 실력만 키우는 수업이 아닙니다.",
        " ",
        "바둑을 통해 아이의 성향과 심리를 이해하고",
        "학습태도·행동까지 함께 지도합니다."
      ]
    },
    {
      title: "1:1 · 1:2 소수정예 수업",
      content: [
        "아이의 작은 변화까지 놓치지 않는 초밀착 지도",
        " ",
        "단체수업에서는 불가능한 개별 맞춤 케어로",
        "성장 속도를 높입니다."
      ]
    },
    {
      title: "23년 경력이 만든 맞춤 커리큘럼",
      content: [
        "아이의 속도에 맞춰 매월 목표를 설정하고",
        " ",
        "입문 → 초급 → 중급 → 고급 → 기사 → 유단자까지",
        "성장 방향을 함께 공유합니다."
      ]
    }
  ];

  return (
    <section id="instructor" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-normal mb-2 tracking-title">
            원장 직강
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold tracking-title">
            오랜 지도 경험의 차이
          </h2>
        </div>

        {/* 윤정희 원장님 소개 섹션 */}
        <div className="bg-white rounded-2xl p-4 md:p-8 shadow-lg mb-8 md:mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* 사진 왼쪽 */}
            <div>
              <img
                src="/upimg/6.jpg"
                alt="윤정희 원장"
                className="w-full rounded-2xl object-cover object-top shadow-lg"
              />
            </div>

            {/* 경력 내용 오른쪽 */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-primary-muted tracking-title">윤정희 원장</h3>

              <div className="space-y-1 md:space-y-2 text-gray-700 text-sm md:text-base">
                <p className="flex items-start"><span className="text-primary-muted mr-2">•</span>코코바둑 반포점 관리원장</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>메타바둑 서초점 관리원장</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>바둑경력 23년</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>바둑교육경력 15년</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>명지대학교 바둑학과 전체 수석입학/졸업</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>명지대학교 바둑학과 석박사 우수 신입생 선발</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>바둑학 석사</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>바둑학 박사 전공</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>바둑학원 원장 대상 바둑 교육법 교육·컨설팅 전문가</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>킨텍스 교육 박람회 어린이 바둑 수업 프로그램 운영</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>문화체육관광부 해외 바둑지도사 초청 바둑교육 강의</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>문화체육관광부 바둑지도자 교육세미나 유아 바둑교육 강사</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>바둑지도사 자격증 필수 이수 과정 유아 바둑교육 출강 및 시험 진행</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>바둑채널 방송국 바둑 캐스터</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>메타바둑 교육브랜드 창립</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>해군사관학교 바둑 수업 진행</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>바둑TV채널 &lt;GS칼텍스배 바둑기전&gt; 리포터 데뷔</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>K-바둑 채널 &lt;삼성화재배 월드바둑 마스터스&gt; 진행</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>K-바둑 채널 &lt;바둑비타민 시즌4&gt; MC 진행</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>K-바둑 채널 &lt;바둑비타민 시즌5&gt; MC 진행</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>Google 구글 딥마인드 &lt;이세돌 알파고 챌린지 매치&gt; 생중계 진행</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>&lt;우리금융그룹배&gt; 어린이 바둑왕전 MC진행</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>바둑TV채널 어린이 바둑교육 프로그램 진행</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>&lt;어서와 바둑은 처음이지&gt; 바둑교육 프로그램 MC진행</p>
              </div>
            </div>
          </div>
        </div>

        {/* 임동준 원장님 소개 섹션 */}
        <div className="bg-white rounded-2xl p-4 md:p-8 shadow-lg mb-8 md:mb-16">
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
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-primary-muted tracking-title">임동준 원장</h3>

              <div className="space-y-1 md:space-y-2 text-gray-700 text-sm md:text-base">
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>바둑 경력 23년</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>바둑 교육 경력 13년</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>강남 미키 바둑학원 원장</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>강남 미생 어린이 바둑학원 부원장</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>명지대학교 바둑학과 전공</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>명지대학교 사회교육원 바둑학 전공</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>강남 미생 성인 바둑학원 부원장</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>명지아카데미 어린이 전문반 지도</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>청재바둑학원 바둑 영재반 전문 지도</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>잠실메타바둑학원 온라인 수업 수석 강사</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>청솔초등학교 논리력 향상 바둑 수업 지도 교사</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>풍양초등학교 집중력 향상 바둑 프로그램 지도 교사</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>개원초등학교 판단력 향상 바둑 프로그램 지도 교사</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>초림초등학교 수리력 향상 바둑 프로그램 지도 교사</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>불정초등학교 창의력 향상 바둑 프로그램 지도 교사</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>미생바둑 전국바둑대회 우승</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>성남시 바둑연합회장배 유단자부 3위</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>명지대학교 총장배 바둑대회 4위</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>유창혁 바둑도장배 유단자부 입상</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>인공지능 전문 바둑교육 지도 자격증</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>AI 바둑 유아교육 전문 과정 수료</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>AI 바둑교육 전문 지도사 과정 수석 수료</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>AI 바둑 어린이 전문 커리큘럼과정 개발</p>
                <p className="flex items-start"><span className="text-primary-subtle mr-2">•</span>스포츠바둑지도사 1급 / 바둑지도사 2급</p>
              </div>
            </div>
          </div>
        </div>

        {/* 코코바둑을 선택하는 이유 섹션 */}
        {/*<div className="bg-teal-50 rounded-2xl p-4 md:p-8">
          <h3 className="text-xl md:text-2xl lg:text-3xl text-center mb-6 md:mb-10 text-teal-800">
            우리아이 바둑 수업, <span className="font-bold">왜 코코바둑일까요?</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {whyCocoReason.map((reason, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="hidden md:flex w-10 h-10 bg-teal-500 text-white rounded-full items-center justify-center font-bold mr-3">
                    {index + 1}
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-teal-700">{reason.title}</h4>
                </div>
                <div className="space-y-1 md:space-y-1">
                  {reason.content.map((line, lineIndex) => (
                    <p key={lineIndex} className="text-gray-700 text-xs md:text-sm leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>*/}
      </div>
    </section>
  );
}
