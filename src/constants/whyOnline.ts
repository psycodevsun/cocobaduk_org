import type { WhyOnlineReason } from '@/types';

export const WHY_ONLINE_REASONS: WhyOnlineReason[] = [
  {
    number: '1',
    title: `이동시간은 줄이고, 집중은 수업에만`,
    points: [
      '학원 이동 없이 집에서 바로 시작하는 온라인 바둑수업',
      '아이 혼자 집중하는 환경으로, 수업에만 온전히 몰입',
      '오프라인처럼 수업 태도를 잡는 데 시간을 쓰지 않아',
      '수업은 시작부터 흐름이 끊기지 않습니다.',
    ],
    color: 'bg-neutral-50',
    image: '/upimg/11-1.jpg',
  },
  {
    number: '2',
    title: `온라인 바둑수업, <br class="hidden max-md:block"/>왜 실력이 더 빠르게 오를까요?`,
    points: [
      '실시간 1:1 대국으로  즉각적인 피드백',
      '아이 표정·시선·마우스 움직임까지 한눈에 확인',
      '이론 수업 → 실전 바둑 → 복기 한 흐름으로 이어지는 수업 구성',
    ],
    color: 'bg-neutral-50',
    image: '/upimg/11-2.jpg',
  },
  {
    number: '3',
    title: `반포에서 정원 마감으로 검증된 수업`,
    points: [
      '반포에서 늘 정원 마감되던 수업을 이제',
      '집에서 그대로 경험합니다.',
      '반포에서 검증된 교육 방식 그대로 우리 아이도 같은 수업,',
      '같은 지도 방식으로 배웁니다.',
    ],
    color: 'bg-neutral-50',
    image: '/upimg/11-3.jpg',
  },
  {
    number: '4',
    title: `승부욕이 강한 우리 아이, <br class="hidden max-md:block"/>바둑으로 이렇게 달라졌어요`,
    points: [
      '지는 순간 울고 화내던 아이가',
      '이제는 감정을 가라앉히고 어디를 고치면 될지 생각합니다.',
    ],
    quote: '"엄마, 나 이제 중요한 순간엔 천천히 두면 더 잘할 수 있을 것 같아."',
    color: 'bg-neutral-50',
    image: '/upimg/11-4.jpg',
  },
];
