import { memo, useMemo } from 'react';
import { Section, Container, Image } from '@/components/ui';
import { ABILITIES } from '@/constants';

const BrainDevelopment = memo(function BrainDevelopment() {
  // 육각형 레이더 차트 좌표 계산
  const centerX = 150;
  const centerY = 150;
  const maxRadius = 100;

  const chartData = useMemo(() => {
    const getPoint = (index: number, value: number) => {
      const angle = (Math.PI * 2 * index) / 6 - Math.PI / 2;
      const radius = (value / 100) * maxRadius;
      return {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      };
    };

    const getLabelPoint = (index: number) => {
      const angle = (Math.PI * 2 * index) / 6 - Math.PI / 2;
      const radius = maxRadius + 35;
      return {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      };
    };

    // 데이터 포인트 경로
    const dataPoints = ABILITIES.map((_, i) => getPoint(i, ABILITIES[i].value));
    const dataPath =
      dataPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

    // 육각형 그리드 경로 (20%, 40%, 60%, 80%, 100%)
    const gridLevels = [20, 40, 60, 80, 100];
    const gridPaths = gridLevels.map((level) => {
      const points = ABILITIES.map((_, i) => getPoint(i, level));
      return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';
    });

    // 축 라인
    const axisLines = ABILITIES.map((_, i) => {
      const point = getPoint(i, 100);
      return `M ${centerX} ${centerY} L ${point.x} ${point.y}`;
    });

    // 라벨 위치
    const labelPoints = ABILITIES.map((_, i) => getLabelPoint(i));

    return { dataPoints, dataPath, gridPaths, axisLines, labelPoints };
  }, []);

  return (
    <Section background="primary" ariaLabelledby="brain-development-title" className='bg-[url(/upimg/9-1.jpg)] bg-no-repeat bg-bottom bg-[#eaf3f6] max-md:bg-none max-md:pb-0 max-md:pt-14' style={{ backgroundSize: '1550px' }}>
      <Container className='max-md:p-0'>
        <div className="text-center mb-6">
          <h2 id="brain-development-title" className="text-3xl md:text-4xl mb-1 tracking-tight">
            코코바둑의 수업은
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            <span className="text-primary-emphasis">이기는 법</span>보다{' '}
            <span className="text-primary-emphasis">생각하는 과정</span>을 <br className='hidden max-md:block'/>먼저 가르칩니다
          </h3>
        </div>
        <div className="text-center mb-10 max-md:px-7">
          <span className="inline-block px-8 py-1 rounded-full bg-primary-emphasis">
            <p className="text-base md:text-lg lg:text-base md:font-bold tracking-tight text-white break-keep">
              생각하고 판단하는 힘을 키우는 수업, <br className="hidden max-md:block"/>바로 코코바둑의 교육 방식입니다
            </p>
          </span>
        </div>

        <div className="grid lg:grid-cols-2 items-center max-w-5xl mx-auto max-md:px-7">
          {/* 육각형 레이더 차트 */}
          <div className="flex justify-center">
            <svg
              viewBox="0 0 300 300"
              className="w-full max-w-[350px]"
              role="img"
              aria-label="두뇌 발달 능력 차트"
            >
              {/* 그리드 라인 */}
              {chartData.gridPaths.map((path, i) => (
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
              {chartData.axisLines.map((path, i) => (
                <path key={i} d={path} stroke="#d4a574" strokeWidth="1" opacity={0.5} />
              ))}

              {/* 데이터 영역 */}
              <path
                d={chartData.dataPath}
                fill="#6294bd"
                fillOpacity={0.3}
                stroke="#6294bd"
                strokeWidth="2"
              />

              {/* 데이터 포인트 */}
              {chartData.dataPoints.map((point, i) => (
                <circle key={i} cx={point.x} cy={point.y} r="5" fill="#6294bd" />
              ))}

              {/* 라벨 */}
              {ABILITIES.map((ability, i) => (
                <text
                  key={i}
                  x={chartData.labelPoints[i].x}
                  y={chartData.labelPoints[i].y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-xs font-black fill-[#2864a0]"
                  style={{ fontSize: '12px' }}
                >
                  {ability.name}
                </text>
              ))}
            </svg>
          </div>

          <div></div>
        </div>

        <Image src="/upimg/9.jpg" alt="그래프 이미지" className='hidden max-md:block max-md:w-full'/>
      </Container>
    </Section>
  );
});

export default BrainDevelopment;
