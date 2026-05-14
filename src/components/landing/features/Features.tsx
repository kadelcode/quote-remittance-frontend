import FeatureCard from './FeatureCard';

import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { FEATURES } from '@/constants/features';

const Features = () => {
  return (
    <section id="features" className="bg-slate-50 py-24">
      <Container>
        <SectionHeading
          title="Everything You Need For Global Transfers"
          subtitle="Modern infrastructure for transparent and secure international remittance."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
