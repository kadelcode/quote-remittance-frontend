import { Link } from 'react-router-dom';

import Container from '@/components/common/Container';

const CTABanner = () => {
  return (
    <section className="py-24">
      <Container>
        <div className="rounded-[40px] bg-blue-600 p-12 text-center text-white">
          <h2 className="text-5xl font-bold">Start Sending Money Globally Today</h2>

          <p className="mt-6 text-lg text-blue-100">
            Fast, transparent, and secure international transfers.
          </p>

          <Link
            to="/request-quote"
            className="mt-8 inline-block rounded-2xl bg-white px-8 py-4 font-semibold text-blue-600"
          >
            Request Quote
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CTABanner;
