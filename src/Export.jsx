import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { FaCaretDown } from 'react-icons/fa';

const ExportContacts = ({ isVisible, toggleVisibility }) => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const [shouldRender, setShouldRender] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

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

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    if (!shouldRender) return null;

    return (
        <section
            ref={sectionRef}
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-45`}
        >
            <div
                ref={contentRef}
                className={`relative w-full max-w-lg bg-white rounded-lg shadow-lg transition-scale duration-300 transform ${
                    isAnimating ? 'scale-100' : 'scale-0'
                }`}
            >
                <div className="flex justify-between items-center p-4 bg-blue-600 text-white rounded-t-lg">
                    <span className="font-semibold text-lg">Export Contacts</span>
                    <X onClick={() => toggleVisibility(false)} className="cursor-pointer text-lg" />
                </div>
                <div className="p-6">
                    <div className="mb-4">
                        <label className="font-semibold text-gray-700">File format</label>
                        <div
                            className="relative mt-2 cursor-pointer"
                            onClick={toggleDropdown}
                        >
                            <div className="flex justify-between items-center px-4 py-2 border rounded">
                                <span>Choose file type</span>
                                <FaCaretDown className="text-gray-600" />
                            </div>
                            {isDropdownVisible && (
                                <div className="absolute w-full mt-2 bg-white border rounded shadow-lg z-10">
                                    <ul className="p-2">
                                        <li className="p-2 hover:bg-gray-100 cursor-pointer">CSV</li>
                                        <li className="p-2 hover:bg-gray-100 cursor-pointer">XLSX</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="font-semibold text-gray-700">Properties</label>
                        <div className="mt-2">
                            <label className="block text-gray-600">
                                <input type="radio" name="properties" className="mr-2" />
                                Include only properties in columns
                            </label>
                            <label className="block mt-2 text-gray-600">
                                <input type="radio" name="properties" className="mr-2" />
                                Include all properties
                            </label>
                            <label className="block mt-2 text-gray-600">
                                <input type="radio" name="properties" className="mr-2" />
                                Custom configuration
                            </label>
                        </div>
                    </div>

                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                        >
                            Confirm
                        </button>
                        <button
                            type="button"
                            className="px-6 py-2 text-gray-700 border rounded hover:bg-gray-100"
                            onClick={() => toggleVisibility(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExportContacts;
