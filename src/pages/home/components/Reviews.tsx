
export default function Reviews() {
  const reviews = [
    { 
      id: 1, 
      rating: 5, 
      comment: "처음에는 온라인 수업이 과연 효과가 있을까 반신반의했는데, 3개월 지나니 아이의 집중력이 정말 놀랍게 향상됐어요. 예전에는 10분도 앉아있지 못했던 아이가 이제는 1시간 동안 바둑에 집중할 수 있게 되었습니다. 원장님께서 아이의 수준에 맞춰 차근차근 지도해주셔서 정말 감사해요." 
    },
    { 
      id: 2, 
      rating: 5, 
      comment: "1:1 수업이라서 우리 아이만을 위한 맞춤 수업을 받을 수 있어서 너무 좋아요. 아이가 이해할 때까지 반복해서 설명해주시고, 실수를 해도 격려해주셔서 아이가 바둑에 대한 자신감을 갖게 되었어요. 무엇보다 아이가 매주 수업을 기다리며 즐거워하는 모습을 보니 부모로서 정말 뿌듯합니다." 
    },
    { 
      id: 3, 
      rating: 5, 
      comment: "온라인 수업이라서 처음에는 걱정이 많았는데, 오히려 오프라인보다 더 집중도가 높은 것 같아요. 집에서 편안한 환경에서 수업을 받다 보니 아이가 더 적극적으로 참여하고, 실력도 눈에 띄게 늘었습니다. 6개월 만에 급수가 3급이나 올랐어요!" 
    },
    { 
      id: 4, 
      rating: 5, 
      comment: "원장님의 설명이 정말 쉽고 체계적이에요. 복잡한 바둑 이론도 아이가 이해하기 쉽게 예시를 들어 설명해주시고, 매번 수업 후에는 오늘 배운 내용을 정리해서 보내주셔서 복습하기도 좋아요. 덕분에 아이의 논리적 사고력이 많이 향상된 것 같습니다." 
    },
    { 
      id: 5, 
      rating: 5, 
      comment: "학원 왕복 시간이 절약되어서 정말 좋아요. 예전에는 학원 가는데만 1시간이 걸렸는데, 이제는 그 시간에 다른 공부도 할 수 있게 되었어요. 그런데 효과는 오히려 더 좋네요. 개인 맞춤 수업이라 그런지 아이의 실력 향상 속도가 정말 빨라졌습니다." 
    },
    { 
      id: 6, 
      rating: 5, 
      comment: "아이가 바둑을 처음 접했을 때는 어려워했는데, 원장님께서 재미있게 가르쳐주셔서 이제는 바둑을 정말 좋아하게 됐어요. 친구들과 바둑 얘기도 하고, 집에서도 혼자 바둑 문제를 풀며 즐거워해요. 바둑을 통해 아이가 인내심과 끈기도 기를 수 있어서 일석이조입니다." 
    },
    { 
      id: 7, 
      rating: 5, 
      comment: "체계적인 커리큘럼이 정말 마음에 들어요. 아이의 실력에 맞춰 단계별로 차근차근 진행해주시고, 정기적으로 실력 점검도 해주셔서 아이의 성장 과정을 명확히 알 수 있어요. 무엇보다 아이가 자신의 실력 향상을 스스로 느끼며 성취감을 얻고 있어서 너무 좋습니다." 
    },
    { 
      id: 8, 
      rating: 5, 
      comment: "수업 후에 복습 자료와 숙제를 주셔서 아이가 스스로 학습하는 습관까지 기를 수 있어요. 그리고 학부모에게도 아이의 수업 진도와 특이사항을 상세히 알려주셔서 부모로서 아이의 학습 상황을 정확히 파악할 수 있어서 정말 만족스럽습니다." 
    },
    { 
      id: 9, 
      rating: 5, 
      comment: "바둑을 배우면서 아이의 판단력과 계획성이 확실히 늘었어요. 바둑뿐만 아니라 일상생활에서도 더 신중하게 생각하고 행동하는 모습을 보이고, 수학 문제를 풀 때도 더 논리적으로 접근하는 것 같아요. 정말 바둑의 교육적 효과를 실감하고 있습니다." 
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <i className="ri-chat-quote-line mr-3 text-blue-600"></i>
            학부모님 실제 후기
          </h2>
          <p className="text-lg text-gray-600">실제 수강생 학부모님들의 생생한 후기입니다</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill"></i>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">후기 {review.id}</span>
              </div>
              <p className="text-gray-700 leading-relaxed">"{review.comment}"</p>
              <div className="mt-4 text-right">
                <span className="text-sm text-gray-500">- 수강생 학부모 -</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
