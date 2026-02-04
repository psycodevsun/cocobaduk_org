import { memo } from 'react';
import { Section, Container, Card, Grid, Image } from '@/components/ui';
import { LEARNING_STEPS } from '@/constants';

const LearningProcess = memo(function LearningProcess() {
  return (
    <Section background="white" ariaLabelledby="learning-process-title" className='max-md:pb-0 max-md:pt-14'>
      <Container>
        <div className="text-center mb-24 max-md:mb-12">
          <h2 id="learning-process-title" className="text-3xl md:text-4xl tracking-tight max-md:mb-0">
            코코바둑 <span className="font-bold">수강안내</span>
          </h2>
        </div>

        <Grid cols={3} gap="large">
          {LEARNING_STEPS.map((step) => (
            <div>
              <Image src={`/upimg/${step.image}`} alt="이미지"/>
              <Card key={step.step} variant="default" padding="large" className="bg-neutral-100 min-h-[420px] max-md:min-h-0 max-md:py-8 pr-0">
                <div className="flex items-center mb-4">
                  <span className="bg-primary-emphasis text-white px-4 py-2 rounded-full tracking-tight text-sm font-bold mr-3">
                    STEP {step.step}
                  </span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-primary-emphasis tracking-normal mb-7">
                  {step.title}
                </h3>
                <div>
                  <p className="tracking-normal mb-7">{step.description}</p>
                  {step.step === 1 && (
                    <>
                      <div className="mb-7">
                        <p className="tracking-normal">{step.details[0]}</p>
                        <p className="tracking-normal">{step.details[1]}</p>
                      </div>
                      <div className="mb-3">
                        <p className="tracking-normal">{step.details[2]}</p>
                        <p className="tracking-normal">{step.details[3]}</p>
                      </div>
                    </>
                  )}
                  {step.step === 2 && (
                    <>
                      <ul className="mb-7">
                        {step.details.slice(0, 3).map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="tracking-tight mr-2">·</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="tracking-tight mb-3">{step.details[3]}</p>
                    </>
                  )}
                  {step.step === 3 && (
                    <>
                      <ul className="mb-7">
                        {step.details.slice(0, 3).map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="tracking-tight mr-2">{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mb-3">
                        <p className="tracking-tight">아이의 성장 속도에 맞춰</p>
                        <p className="tracking-tight">가장 적합한 반으로 배정합니다.</p>
                      </div>
                    </>
                  )}
                </div>
              </Card>
              
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
});

export default LearningProcess;
