import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

const CreateNewContact = ({ isVisible, toggleVisibility }) => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isVisible) {
      setShouldRender(true);
      timeoutId = setTimeout(() => {
        setIsAnimating(true);
      }, 100); // Start animation after a slight delay
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
      if (contentRef.current && !contentRef.current.contains(event.target)) {
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
      className={`fixed top-0 right-0 h-screen w-full z-50 bg-black bg-opacity-45`}
    >
      <div
        ref={contentRef}
        className={`absolute right-0 top-0 h-full w-[420px] bg-white shadow-lg transition-transform duration-300 transform ${
          isAnimating ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="bg-blue-600 text-white text-lg font-semibold px-6 py-3 flex items-center justify-between">
            <div>Create Contact</div>
            <X
              onClick={() => toggleVisibility(false)}
              className="text-xl cursor-pointer"
            />
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {/* First Name */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                First name*
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="firstName"
                  placeholder=""
                  className="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
            </div>

            {/* Last Name */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Last name*
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="lastName"
                  placeholder=""
                  className="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="email"
                  placeholder=""
                  className="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Contact info
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="contactInfo"
                  placeholder=""
                  className="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
            </div>

            {/* LinkedIn */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                LinkedIn
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="linkedin"
                  placeholder=""
                  className="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
            </div>

            {/* Location */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="location"
                  placeholder=""
                  className="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
            </div>

            {/* Notes */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Notes
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="notes"
                  placeholder=""
                  className="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
            </div>

            {/* Postal Code */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Postal code
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="postalCode"
                  placeholder=""
                  className="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
            </div>

            {/* Summary */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Summary
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="summary"
                  placeholder=""
                  className="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="bg-gray-100 p-4 border-t border-gray-200 flex justify-between">
            <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Create Contact
            </button>
            <button
              onClick={() => toggleVisibility(false)}
              className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateNewContact;
