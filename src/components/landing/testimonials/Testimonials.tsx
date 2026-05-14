import TestimonialCard from './TestimonialCard';

import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';

const testimonials = [
  {
    quote: 'Transparent rates and very fast transfers.',
    name: 'Michael Johnson',
  },
  {
    quote: 'The best remittance experience we have used.',
    name: 'Sarah Williams',
  },
  {
    quote: 'Secure, reliable, extremely fast and easy to use.',
    name: 'David Lee',
  },
];

const Testimonials = () => {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          title="Trusted By Customers Worldwide"
          subtitle="What users say about our platform."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
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
