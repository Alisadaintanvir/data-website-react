import { useEffect, useRef, useState } from 'react';
import { Bell, X } from 'lucide-react';

const Notifications = ({ isVisible, toggleVisibility }) => {
  const sectionRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isVisible) {
      setShouldRender(true);
      timeoutId = setTimeout(() => {
        setIsAnimating(true);
      }, 100); // Delay before animation starts
    } else {
      setIsAnimating(false);
      timeoutId = setTimeout(() => {
        setShouldRender(false);
      }, 300); // Match this duration with the CSS transition time
    }

    return () => clearTimeout(timeoutId);
  }, [isVisible]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sectionRef.current && !sectionRef.current.contains(event.target)) {
        toggleVisibility(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleVisibility]);

  if (!shouldRender) return null;

  return (
    <section
      ref={sectionRef}
      className={`fixed top-0 right-0 h-screen w-[420px] bg-white shadow-lg transform transition-transform ease-out duration-300 ${
        isAnimating ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="relative flex flex-col h-full">
        <div className="bg-blue-600 text-white text-lg font-semibold px-6 py-[10px] flex items-center justify-between">
          <div>Notifications</div>
          <X onClick={() => toggleVisibility(false)} className="text-xl cursor-pointer"/>
        </div>

        <ul className="flex-1 overflow-y-auto">
          {Array(2).fill().map((_, index) => (
            <li key={index} className="flex items-start px-6 py-4 border-b border-gray-200 hover:bg-purple-50">
              <div className="bg-purple-100 text-blue-600 rounded-full h-8 w-8 flex items-center justify-center mr-4">
                <Bell className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-sm text-gray-800 mb-1">
                  <div className="font-semibold">Credits reset</div>
                  <div className="text-gray-500 text-xs">Jul 11</div>
                </div>
                <div className="text-xs text-gray-600">Start your new search with 50 free email searches and 100 verifications.</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Notifications;
