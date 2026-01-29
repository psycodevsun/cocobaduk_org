import { memo } from 'react';
import { Section, Container, Grid, Image } from '@/components/ui';
import { WHY_ONLINE_REASONS, BRAIN_HABITS } from '@/constants';

const WhyOnline = memo(function WhyOnline() {
  return (
    <Section background="white" ariaLabelledby="why-online-title" className='max-md:pt-14'>
      <Container>
        <div className="text-center mb-12">
          <h2 id="why-online-title" className="text-3xl md:text-4xl font-bold mb-2 tracking-title">
            왜 온라인 바둑수업일까요?
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-12 max-md:grid-cols-1">
          {WHY_ONLINE_REASONS.map((reason, index) => (
            <div>
              <div>
                <Image src={reason.image} alt='이미지'/>
              </div>

              <div key={index} className={`${reason.color} p-6 md:p-8 rounded-2xl min-h-[250px] max-md:min-h-0 max-md:px-4`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary-emphasis text-white rounded-full flex items-center justify-center font-bold text-2xl max-md:h-7 max-md:w-7 max-md:text-base">
                      <p className="mb-1">{reason.number}</p>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-2xl lg:text-xl font-bold text-primary-emphasis tracking-title leading-title mb-5 max-md:" dangerouslySetInnerHTML={{__html:reason.title}}></h3>

                    <div>
                      {reason.points.map((point, pointIndex) => (
                        <p
                          key={pointIndex}
                          className="text-xs lg:text-base tracking-body leading-caption md:leading-caption max-md:leading-[1.5]"
                        >
                          {point}
                        </p>
                      ))}

                      {reason.quote && (
                        <p className="mt-4 text-lg lg:text-base tracking-body leading-caption text-primary-emphasis font-medium">
                          {reason.quote}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary-emphasis p-6 md:p-8 rounded-2xl max-w-5xl mx-auto max-md:px-3">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl tracking-title text-white mb-6">
              바둑은 아이의 <span className="font-bold text-pt-w100">두뇌 습관</span>을 <br className='hidden max-md:block'/>바꿉니다
            </h3>
            <Grid cols={4} gap="default" className="md:gap-6 max-md:gap-x-3 max-md:gap-y-2">
              {BRAIN_HABITS.map((habit, index) => (
                <div key={index} className="flex items-center justify-center p-3 md:p-4 bg-white rounded-lg">
                  <span className="text-xs md:text-lg lg:text-base tracking-body">{habit}</span>
                </div>
              ))}
            </Grid>
          </div>
        </div>
      </Container>
    </Section>
  );
});

export default WhyOnline;
