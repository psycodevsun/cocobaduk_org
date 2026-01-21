
export default function Reviews() {
  const reviews = [
    {
      id: 1,
      rating: 5,
      image: '/upimg/f1.jpg',
      comment: "처음에는 온라인 수업이 과연 효과가 있을까 반신반의했는데, 3개월 지나니 아이의 집중력이 정말 놀랍게 향상됐어요. 예전에는 10분도 앉아있지 못했던 아이가 이제는 1시간 동안 바둑에 집중할 수 있게 되었습니다."
    },
    {
      id: 2,
      rating: 5,
      image: '/upimg/f2.jpg',
      comment: "1:1 수업이라서 우리 아이만을 위한 맞춤 수업을 받을 수 있어서 너무 좋아요. 아이가 이해할 때까지 반복해서 설명해주시고, 실수를 해도 격려해주셔서 아이가 바둑에 대한 자신감을 갖게 되었어요."
    },
    {
      id: 3,
      rating: 5,
      image: '/upimg/f3.jpg',
      comment: "온라인 수업이라서 처음에는 걱정이 많았는데, 오히려 오프라인보다 더 집중도가 높은 것 같아요. 집에서 편안한 환경에서 수업을 받다 보니 아이가 더 적극적으로 참여하고, 실력도 눈에 띄게 늘었습니다."
    },
    {
      id: 4,
      rating: 5,
      image: '/upimg/f4.jpg',
      comment: "원장님의 설명이 정말 쉽고 체계적이에요. 복잡한 바둑 이론도 아이가 이해하기 쉽게 예시를 들어 설명해주시고, 매번 수업 후에는 오늘 배운 내용을 정리해서 보내주셔서 복습하기도 좋아요."
    },
    {
      id: 5,
      rating: 5,
      image: '/upimg/f5.jpg',
      comment: "학원 왕복 시간이 절약되어서 정말 좋아요. 예전에는 학원 가는데만 1시간이 걸렸는데, 이제는 그 시간에 다른 공부도 할 수 있게 되었어요. 개인 맞춤 수업이라 그런지 아이의 실력 향상 속도가 정말 빨라졌습니다."
    }
  ];

  return (
    <section id="reviews">
      <div className="pt-20 mx-auto px-6 lg:px-8 bg-primary-surface">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-title">
            수강 학부모 후기
          </h2>
          <p className="text-xl lg:text-lg text-normal tracking-body">코코바둑을 직접 경험한 학부모님의 솔직한 후기입니다</p>
        </div>

        {/* 이미지 추가 */}
        <div className="mb-12">
          <img
            src="/upimg/13.jpg"
            alt="학부모 후기 이미지"
            className="w-full max-w-5xl mx-auto object-cover"
          />
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-6 lg:px-8 bg-white">  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 p-4 md:p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={`학부모 ${review.id}`}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="flex text-yellow-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill"></i>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">수강생 학부모</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">"{review.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
