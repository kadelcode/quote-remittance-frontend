import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';

const DashboardPreview = () => {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionHeading
          title="Powerful Dashboard Experience"
          subtitle="Monitor transfers, quotes, and transaction history."
        />

        <div className="rounded-4xl border border-slate-200 bg-white p-10 shadow-2xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl bg-blue-50 p-6">
              <p className="text-slate-500">Wallet Balance</p>
              <h3 className="mt-3 text-4xl font-bold">$24,500</h3>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-6">
              <p className="text-slate-500">Monthly Transfers</p>
              <h3 className="mt-3 text-4xl font-bold">$120k</h3>
            </div>

            <div className="rounded-2xl bg-yellow-50 p-6">
              <p className="text-slate-500">Pending Transfers</p>
              <h3 className="mt-3 text-4xl font-bold">14</h3>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DashboardPreview;
