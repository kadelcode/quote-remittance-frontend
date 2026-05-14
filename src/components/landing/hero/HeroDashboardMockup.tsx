const HeroDashboardMockup = () => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl">
      <div className="space-y-4">
        <div className="rounded-2xl bg-slate-100 p-4">
          <p className="text-sm text-slate-500">Exchange Rate</p>
          <h3 className="mt-2 text-3xl font-bold">1 USD = 1,585 NGN</h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-emerald-50 p-4">
            <p className="text-sm text-slate-500">Transfer Fee</p>
            <h4 className="mt-2 text-xl font-semibold">$4.00</h4>
          </div>

          <div className="rounded-2xl bg-blue-50 p-4">
            <p className="text-sm text-slate-500">Delivery Time</p>
            <h4 className="mt-2 text-xl font-semibold">5 mins</h4>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <span>Transfer Status</span>

            <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
              Completed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDashboardMockup;
