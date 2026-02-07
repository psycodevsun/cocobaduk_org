import { memo } from 'react';
import { Section, Container, Card, Image } from '@/components/ui';
import { INSTRUCTORS } from '@/constants';

const Instructor = memo(function Instructor() {
  return (
    <Section id="instructor" background="gray" ariaLabelledby="instructor-title" className='max-md:pt-14 md:pt-20 md:pb-0'>
      <Container>
        <div className="text-center mb-14 max-md:mb-10">
          <h2 id="instructor-title" className="text-3xl md:text-4xl mb-2 tracking-title">
            원장 직강
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-title">
            오랜 지도 경험의 차이
          </h3>
        </div>

        {INSTRUCTORS.map((instructor, index) => (
          <Card
            key={instructor.name}
            variant="elevated"
            padding="large"
            className={`rounded-2xl ${index < INSTRUCTORS.length - 1 ? 'mb-8 md:mb-12' : 'mb-8 md:mb-16'}`}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* 사진 왼쪽 */}
              <div>
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  rounded="2xl"
                  shadow
                  className="object-top"
                />
              </div>

              {/* 경력 내용 오른쪽 */}
              <div>
                <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-primary-muted tracking-title">
                  {instructor.name}
                </h4>

                <div className="space-y-1 md:space-y-2 text-gray-700 text-sm md:text-base">
                  {instructor.careers.map((career, careerIndex) => (
                    <p key={careerIndex} className="flex items-start">
                      <span
                        className={`${
                          career.highlight ? 'text-primary-muted' : 'text-primary-subtle'
                        } mr-2`}
                      >
                        •
                      </span>
                      {career.text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </Container>
    </Section>
  );
});

export default Instructor;
