import { FiShield, FiLock, FiCheckCircle } from 'react-icons/fi';

import Container from '@/components/common/Container';

const Security = () => {
  return (
    <section id="security" className="bg-slate-900 py-24 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-semibold text-blue-400">Enterprise Security</p>

            <h2 className="mt-4 text-5xl font-bold">Built With Security First</h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              We use bank-level encryption, fraud monitoring, and secure APIs to protect every
              transaction.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl bg-slate-800 p-6">
              <FiShield className="text-3xl text-blue-400" />
              <h3 className="mt-4 text-2xl font-semibold">Secure Infrastructure</h3>
            </div>

            <div className="rounded-3xl bg-slate-800 p-6">
              <FiLock className="text-3xl text-emerald-400" />
              <h3 className="mt-4 text-2xl font-semibold">Encrypted Transfers</h3>
            </div>

            <div className="rounded-3xl bg-slate-800 p-6">
              <FiCheckCircle className="text-3xl text-yellow-400" />
              <h3 className="mt-4 text-2xl font-semibold">Fraud Detection</h3>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Security;
