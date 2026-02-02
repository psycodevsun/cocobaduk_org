// 리뷰 데이터
export interface Review {
  id: number;
  rating: number;
  image: string;
  comment: string;
  writer: string;
}

// 커리큘럼 데이터
export interface CurriculumItem {
  level: string;
  grade: string;
  concept: string;
  ability: string;
  result?: string;
}

// 강사 데이터
export interface Instructor {
  name: string;
  image: string;
  careers: InstructorCareer[];
}

export interface InstructorCareer {
  text: string;
  highlight?: boolean;
}

// 온라인 장점 데이터
export interface Advantage {
  icon: string;
  title: string;
}

// 두뇌 발달 능력 데이터
export interface Ability {
  name: string;
  value: number;
}

// 수강 안내 데이터
export interface LearningStep {
  step: number;
  title: string;
  description: string;
  details: string[];
  image: string;
}

// 왜 온라인인가 데이터
export interface WhyOnlineReason {
  number: string;
  title: string;
  points: string[];
  quote?: string;
  color: string;
  image: string;
}

// 추천 대상 데이터
export interface TargetAudience {
  text: string;
}

// 특징 데이터
export interface Feature {
  title: string;
  hashtag: string;
  points: string[];
  image: string;
  imageAlt: string;
}

// 네비게이션 데이터
export interface NavItem {
  id: string;
  label: string;
}

// 사이트 정보
export interface SiteInfo {
  name: string;
  phone: string;
  phoneDisplay: string;
}

// 성장단계
export interface Growlevel {
  image: string;
  title: string;
  color: string;
}

// 섹션3 컨텐츠
export interface Sec03conts {
  image: string;
  title: string;
  tag: string;
  category: string[];
}
