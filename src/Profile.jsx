import { useState, useRef } from 'react';
import { User, BarChart2, Info, LogOut, Plus, ChevronRight } from 'lucide-react';

function Profile() {
  const [isWorkspaceOptionsVisible, setWorkspaceOptionsVisible] = useState(false);
  const sectionRef = useRef(null);

  const toggleWorkspaceOptions = () => {
    setWorkspaceOptionsVisible(!isWorkspaceOptionsVisible);
  };



  return (
    <section
      ref={sectionRef}
      id="profile-section"
      className="absolute top-14 left:0 md:right-0 bottom-0 h-[525px] w-64 bg-white flex flex-col rounded-md shadow-lg transition-transform duration-300 ease-out border border-gray-300"
    >
      <div
        id="profile-switch-workspace-options"
        className={`absolute top-64 right-64 w-48 h-40 z-50 bg-white rounded-md  shadow-md ${isWorkspaceOptionsVisible ? '' : 'hidden'}`}
      >
        <div className="flex items-center justify-between p-4 h-12 cursor-pointer hover:bg-gray-100" onClick={toggleWorkspaceOptions}>
          <div className="text-blue-500 font-semibold">All Workspaces</div>
        </div>
        <div className="flex items-center justify-between p-4 h-12 cursor-pointer hover:bg-gray-100">
          <div>Md. Nafis Sadik</div>
        </div>
        <div className="flex items-center justify-between p-4 h-12 cursor-pointer hover:bg-gray-100">
          <div className="text-blue-500 flex items-center">
            <Plus className="text-sm mr-2" />
            Add workspaces
          </div>
        </div>
      </div>

      <div className="profile-section-inner px-5 pt-5 pb-2 bg-gray-100 rounded-b-md">
        <div className="flex justify-between mb-2">
          <div>Free</div>
        </div>
        {[...Array(3)].map((_, index) => (
          <div key={index} className="mb-3">
            <div className="flex justify-between text-xs mb-1">
              <div>Email credits</div>
              <div className="text-blue-500 font-semibold">0 of 50</div>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div className="bg-blue-500 h-full w-0 rounded-full"></div>
            </div>
          </div>
        ))}
        <div className="text-xs mb-4">Monthly credits reset in a month.</div>
        <button className="w-full py-2 bg-blue-500 text-white rounded-sm hover:bg-blue-600 text-sm">
          See plans
        </button>
      </div>

      <div className="pt-0">
        <div
          className="flex justify-between items-center px-5 py-4 bg-white border-t border-gray-200 cursor-pointer hover:bg-gray-100"
          onClick={toggleWorkspaceOptions}
        >
          <div>
            <div className="flex justify-between text-xs mb-1">Create or switch workspaces</div>
            <div className="font-semibold">Md. Nafis Sadik</div>
          </div>
          <ChevronRight className="text-gray-400" />
        </div>

        {['Account', 'Usage', 'Help & Support', 'Log out'].map((option, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-5 py-3 bg-white border-t border-gray-200 cursor-pointer hover:bg-gray-100 text-sm"
          >
            <div className="flex items-center">
              {getIcon(option)}
              {option}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function getIcon(option) {
  const icons = {
    Account: <User className="text-sm mr-2 text-gray-400" />,
    Usage: <BarChart2 className="text-sm mr-2 text-gray-400" />,
    'Help & Support': <Info className="text-sm mr-2 text-gray-400" />,
    'Log out': <LogOut className="text-sm mr-2 text-gray-400" />,
  };

  return icons[option] || null;
}

export default Profile;
