import type { LearningStep } from '@/types';

export const LEARNING_STEPS: LearningStep[] = [
  {
    step: 1,
    title: '1:1 맞춤 체험수업',
    description: '체험수업을 통해',
    details: [
      '바둑판을 관찰하는 방법',
      '좋은 수를 찾는 사고 과정',
      '원장님과 직접 대국하며 아이의 실력과 성향을 파악',
      '처음 바둑을 배우는 아이도 부담 없이 참여 가능',
    ],
    image:'6-1.jpg',
  },
  {
    step: 2,
    title: '체험수업 분석 & 상담',
    description: '체험수업을 바탕으로',
    details: [
      '아이의 실력 · 성향 · 집중 패턴',
      '학습 목표 및 예상 성장 과정',
      '선수 자격증 취득 가능 시기',
      '아이의 수업 모습을 바탕으로 맞춤 피드백 제공',
    ],
    image:'6-2.jpg',
  },
  {
    step: 3,
    title: '맞춤 반 배정',
    description: '아이에게 중요한 기준을 우선순위로 반영한 반배정',
    details: [
      '1순위 · 실력',
      '2순위 · 나이 및 또래 구성',
      '3순위 · 성향 및 학습 스타일',
      '아이의 성장 속도에 맞춰 가장 적합한 반으로 배정합니다.',
    ],
    image:'6-3.jpg',
  },
];
