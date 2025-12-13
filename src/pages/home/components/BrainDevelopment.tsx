
export default function BrainDevelopment() {
  const abilities = [
    { name: '공간비교능력', value: 90 },
    { name: '수리력', value: 85 },
    { name: '판단력', value: 88 },
    { name: '관찰력', value: 92 },
    { name: '추론력', value: 87 },
    { name: '집중력', value: 95 }
  ];

  // 육각형 레이더 차트 좌표 계산
  const centerX = 150;
  const centerY = 150;
  const maxRadius = 100;

  const getPoint = (index: number, value: number) => {
    const angle = (Math.PI * 2 * index) / 6 - Math.PI / 2;
    const radius = (value / 100) * maxRadius;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    };
  };

  const getLabelPoint = (index: number) => {
    const angle = (Math.PI * 2 * index) / 6 - Math.PI / 2;
    const radius = maxRadius + 35;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    };
  };

  // 데이터 포인트 경로
  const dataPoints = abilities.map((_, i) => getPoint(i, abilities[i].value));
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  // 육각형 그리드 경로 (20%, 40%, 60%, 80%, 100%)
  const gridLevels = [20, 40, 60, 80, 100];
  const gridPaths = gridLevels.map(level => {
    const points = abilities.map((_, i) => getPoint(i, level));
    return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';
  });

  // 축 라인
  const axisLines = abilities.map((_, i) => {
    const point = getPoint(i, 100);
    return `M ${centerX} ${centerY} L ${point.x} ${point.y}`;
  });

  return (
    <section className="py-20" style={{ backgroundColor: '#F8EEE2' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <i className="ri-brain-line mr-3 text-amber-700"></i>
            바둑으로 향상되는 우리아이의 두뇌능력
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* 이미지 */}
          <div>
            <img
              src="/upimg/9.jpg"
              alt="두뇌 발달 이미지"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* 육각형 레이더 차트 */}
          <div className="flex justify-center">
            <svg viewBox="0 0 300 300" className="w-full max-w-[350px]">
              {/* 그리드 라인 */}
              {gridPaths.map((path, i) => (
                <path
                  key={i}
                  d={path}
                  fill="none"
                  stroke="#d4a574"
                  strokeWidth="1"
                  opacity={0.3}
                />
              ))}

              {/* 축 라인 */}
              {axisLines.map((path, i) => (
                <path
                  key={i}
                  d={path}
                  stroke="#d4a574"
                  strokeWidth="1"
                  opacity={0.5}
                />
              ))}

              {/* 데이터 영역 */}
              <path
                d={dataPath}
                fill="#f59e0b"
                fillOpacity={0.3}
                stroke="#f59e0b"
                strokeWidth="2"
              />

              {/* 데이터 포인트 */}
              {dataPoints.map((point, i) => (
                <circle
                  key={i}
                  cx={point.x}
                  cy={point.y}
                  r="5"
                  fill="#f59e0b"
                />
              ))}

              {/* 라벨 */}
              {abilities.map((ability, i) => {
                const labelPoint = getLabelPoint(i);
                return (
                  <text
                    key={i}
                    x={labelPoint.x}
                    y={labelPoint.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-xs font-bold fill-amber-800"
                    style={{ fontSize: '12px' }}
                  >
                    {ability.name}
                  </text>
                );
              })}
            </svg>
          </div>
        </div>

        <div className="text-center space-y-6 mt-12">
          <p className="text-xl font-medium text-gray-700">
            바둑은 감정조절력까지 길러줍니다.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            아이가 스스로 '최선의 선택'을 찾는 힘을 키워갑니다.
          </p>
        </div>
      </div>
    </section>
  );
}
