import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import MobileSidebar from '@/components/dashboard/sidebar/MobileSidebar';
import Sidebar from '@/components/dashboard/sidebar/Sidebar';
import TopNav from '@/components/dashboard/topnav/TopNav';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Mobile Sidebar */}
        <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <div className="flex min-h-screen flex-1 flex-col">
          <TopNav onMenuClick={() => setIsSidebarOpen(true)} />

          <main className="flex-1 p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
