
export default function OnlineAdvantages() {
  const advantages = [
    {
      icon: 'ri-global-line',
      title: '전 세계 어디든 인터넷만 있으면 수업 가능'
    },
    {
      icon: 'ri-computer-line',
      title: 'PC만 있으면 OK, 별도 장비 없이 바로 참여'
    },
    {
      icon: 'ri-time-line',
      title: '오전 9시 ~ 밤 11시, 원하는 시간대에 수업 배정'
    },
    {
      icon: 'ri-calendar-check-line',
      title: '학부모 일정에 맞춘 유연한 수업 운영'
    }
  ];

  return (
    <section className="py-20 bg-surface-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-2 tracking-title">
            집에서 편하게
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold tracking-title mb-6">
            원하는 시간에 배우는 온라인바둑
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* 이미지 왼쪽 */}
          <div>
            <img
              src="/upimg/8.jpg"
              alt="온라인 수업 이미지"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* 4개 박스 오른쪽 */}
          <div className="grid grid-cols-1 gap-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-white rounded-xl">
                <div className="w-10 h-10 bg-primary-emphasis rounded-full flex items-center justify-center flex-shrink-0">
                  <i className={`${advantage.icon} text-xl text-white`}></i>
                </div>
                <div>
                  <p className="text-lg tracking-body">{advantage.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
