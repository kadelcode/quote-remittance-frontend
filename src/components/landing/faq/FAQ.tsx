import FAQItem from './FAQItem';

import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';

const faqs = [
  {
    question: 'How long do transfers take?',
    answer: 'Most transfers complete within minutes.',
  },
  {
    question: 'Are exchange rates real-time?',
    answer: 'Yes, rates are updated in real-time.',
  },
  {
    question: 'Is my transaction secure?',
    answer: 'We use enterprise-grade encryption.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-slate-50 py-24">
      <Container>
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Answers to common questions."
        />

        <div className="mx-auto max-w-4xl space-y-6">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
