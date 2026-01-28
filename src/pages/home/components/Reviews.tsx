import { memo } from 'react';
import { Container, Card, Grid, Image, Icon } from '@/components/ui';
import { REVIEWS } from '@/constants';

const Reviews = memo(function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-title">
      <div className="pt-20 mx-auto px-6 lg:px-8 bg-primary-surface">
        <div className="text-center mb-12">
          <h2 id="reviews-title" className="text-3xl md:text-4xl font-bold mb-2 tracking-title">
            수강 학부모 후기
          </h2>
          <p className="text-xl lg:text-lg text-normal tracking-body">
            코코바둑을 직접 경험한 학부모님의 솔직한 후기입니다
          </p>
        </div>

        {/* 이미지 추가 */}
        <div className="mb-12">
          <Image
            src="/upimg/13.jpg"
            alt="학부모 후기 이미지"
            className="max-w-5xl mx-auto"
            rounded="none"
          />
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-6 lg:px-8 bg-white">
        <Container size="narrow" className='max-md:px-0'>
          <Grid cols={3} gap="default">
            {REVIEWS.map((review) => (
              <Card key={review.id} variant="default" hover className="bg-gray-50">
                <div className="flex items-center mb-4">
                  <Image
                    src={review.image}
                    alt={`학부모 ${review.id}`}
                    rounded="full"
                    className="w-12 h-12 mr-3"
                  />
                  <div>
                    <div className="flex text-yellow-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="ri-star-fill" size="default" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">수강생 학부모</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">"{review.comment}"</p>
              </Card>
            ))}
          </Grid>
        </Container>
      </div>
    </section>
  );
});

export default Reviews;
