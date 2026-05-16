import { FiX } from 'react-icons/fi';

import Sidebar from './Sidebar';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileSidebar = ({ isOpen, onClose }: Props) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && <div onClick={onClose} className="fixed inset-0 z-40 bg-black/50 lg:hidden" />}

      {/* Drawer */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-72 transform transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="relative h-full bg-white shadow-2xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-xl p-2 hover:bg-slate-100"
            aria-label="Close sidebar"
          >
            <FiX className="text-2xl" />
          </button>

          <Sidebar />
        </div>
      </aside>
    </>
  );
};

export default MobileSidebar;
