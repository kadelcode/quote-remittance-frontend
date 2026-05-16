import DashboardContent from '@/components/dashboard/layouts/DashboardContent';
import PageHeader from '@/components/dashboard/layouts/PageHeader';

const DashboardHomePage = () => {
  return (
    <DashboardContent>
      <PageHeader title="Dashboard" description="Monitor your transfers and quotes." />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-slate-500">Total Transfers</p>

          <h3 className="mt-4 text-4xl font-bold">$24,500</h3>
        </div>
      </div>
    </DashboardContent>
  );
};

export default DashboardHomePage;
