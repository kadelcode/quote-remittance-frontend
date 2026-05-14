import TestimonialCard from './TestimonialCard';

import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { TESTIMONIALS } from '@/constants/testimonials';

const Testimonials = () => {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          title="Trusted By Customers Worldwide"
          subtitle="What users say about our platform."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              quote={testimonial.quote}
              name={testimonial.name}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
