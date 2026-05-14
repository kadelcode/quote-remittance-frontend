import StepCard from './StepCard';

import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';

const steps = [
  {
    step: '1',
    title: 'Create Account',
    description: 'Sign up and verify your account securely.',
  },
  {
    step: '2',
    title: 'Request Quote',
    description: 'Get real-time exchange rates instantly.',
  },
  {
    step: '3',
    title: 'Send Money',
    description: 'Track and complete your transfer globally.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading title="How It Works" subtitle="Simple steps to send money globally." />

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <StepCard key={step.step} {...step} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
