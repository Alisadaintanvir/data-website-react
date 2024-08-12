import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AlignJustify, Search, Bell, Settings, CircleUser } from 'lucide-react';

const Navbar = ({ onProfileClick, onNotificationsClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleSearchClick = () => {
    setIsVisible(!isVisible);
  };

  const menuData = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/search', label: 'Search' },
    { href: '/contacts', label: 'Contacts' },
    { href: '/lists', label: 'Lists' },
    { href: '/companies', label: 'Companies' },
    { href: '/enrich', label: 'Enrich' },
    { href: '/verify', label: 'Verify' },
  ];

  return (
    <nav className="w-full h-12 flex justify-between items-center py-0 px-4 bg-[#1c2548] text-blue-400 sticky top-0">
      <div className="flex items-center">
        <div className="text-2xl font-bold xl:ml-4 mr-2 lg:mr-4 cursor-pointer" onClick={() => window.location.href = '/dashboard'}>LOGO</div>
        <div
          className={`fixed top-0 w-60 md:w-80 p-4 lg:p-0 right-0 h-full bg-[#1c2548] transition-transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:-translate-x-0 lg:static lg:flex lg:w-0`}
        >
          <ul className="flex flex-col lg:flex-row">
            {menuData.map(({ href, label }) => (
              <li key={href} className="my-2 lg:my-0 text-[14px]">
                <NavLink
                  to={href}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-sm transition-colors duration-300 ${
                      isActive ? 'text-white bg-[#243759] lg:border-b-4 lg:border-b-blue-500' : 'text-slate-300'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <button className="lg:hidden text-gray-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <AlignJustify size={25} className="cursor-pointer" />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <span className={`${isVisible ? 'flex' : 'hidden'} w-60 bg-white rounded-sm py-1 px-2 border border-blue-500`}>
          <span>
            <Search size={14} className="flex items-center cursor-pointer text-blue-700 mt-1" />
          </span>
          <input type="text" className="pl-4 focus:outline-none focus:border-none placeholder-opacity-50 text-sm" placeholder='Type your query' />
        </span>
        <Search size={23} className="cursor-pointer text-white" onClick={handleSearchClick} />
        <Bell size={23} className="cursor-pointer text-white" onClick={onNotificationsClick} />
        <Settings size={23} className="cursor-pointer text-white" onClick={() => window.location.href = '/settings'} />
        <CircleUser size={23} className="cursor-pointer text-white" onClick={onProfileClick} />
      </div>
    </nav>
  );
};

export default Navbar;
