
export default function BrainDevelopment() {
  const abilities = [
    { name: '공간비교능력', icon: 'ri-layout-grid-line' },
    { name: '수리력', icon: 'ri-calculator-line' },
    { name: '판단력', icon: 'ri-lightbulb-line' },
    { name: '관찰력', icon: 'ri-eye-line' },
    { name: '추론력', icon: 'ri-mind-map' },
    { name: '집중력', icon: 'ri-focus-3-line' }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#F8EEE2' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <i className="ri-brain-line mr-3 text-amber-700"></i>
            바둑으로 향상되는 우리아이의 두뇌능력
          </h2>
        </div>
        
        <div className="grid grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          {abilities.map((ability, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <i className={`${ability.icon} text-4xl text-amber-800`}></i>
              </div>
              <h3 className="font-bold text-lg text-amber-800">{ability.name}</h3>
            </div>
          ))}
        </div>
        
        <div className="text-center space-y-6">
          <p className="text-xl font-medium text-gray-700">
            바둑은 감정조절력까지 길러줍니다.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            아이가 스스로 '최선의 선택'을 찾는 힘을 키워갑니다.
          </p>
        </div>
        
        <div className="mt-16 text-center">
          <img 
            src="/images/44ab344daf3c41ceb929389e1d7b73cd.jfif"
            alt="두뇌 발달 이미지"
            className="w-full max-w-4xl mx-auto rounded-xl shadow-lg object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
