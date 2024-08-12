import { useEffect, useState, useRef } from 'react';
import { RxDragHandleDots2 } from "react-icons/rx";
import { X } from 'lucide-react';

export default function EditColumns({ isVisible, toggleSec }) {
    const [isAnimatedVisible, setIsAnimatedVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setIsAnimatedVisible(true);
            }, 100); // Slight delay for smooth transition

            return () => clearTimeout(timer);
        } else {
            setIsAnimatedVisible(false);
        }
    }, [isVisible]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                toggleSec();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [toggleSec]);

    return (
        <section
            id="contacts-edit-column-section"
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ease-out ${
                isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
            {/* Background Mask */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content Container with Scaling Effect */}
            <div
                ref={containerRef}
                className={`relative w-full max-w-3xl bg-white rounded-lg shadow-lg transform transition-transform duration-300 ease-out ${
                    isAnimatedVisible ? 'scale-100' : 'scale-0'
                }`}
            >
                <div className="flex justify-between items-center p-4 px-7 bg-blue-600 text-white rounded-t-lg">
                    <span className="font-semibold text-lg">Choose which columns you see</span>
                    <X onClick={toggleSec} className="cursor-pointer text-lg" />
                </div>
                <div className="flex p-6 space-x-6">
                    <div className="w-1/2 border-r border-gray-300 pr-4">
                        <div className="relative mb-4">
                            <input
                                type="text"
                                placeholder="Search properties"
                                className="w-full h-10 px-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="h-64 overflow-y-auto border rounded bg-white">
                            <div className="p-4">
                                <div className="font-semibold text-gray-700">Contact Properties</div>
                                <div>
                                    <label className="flex items-center font-semibold text-gray-400 mt-1 mb-2">
                                        <input type="checkbox" className="w-4 h-8" />
                                        <span className="ml-2">Company</span>
                                    </label>
                                    <label className="flex items-center font-semibold text-gray-400 mb-2">
                                        <input type="checkbox" className="w-4 h-8" />
                                        <span className="ml-2">Contact info</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <p className="mt-4 text-xs">
                            Don't see the property you're looking for?{' '}
                            <a href="#" className="hover:underline text-blue-500 font-semibold">
                                Create a property
                            </a>
                        </p>
                    </div>
                    <div className="w-1/2">
                        <div className="font-semibold text-gray-700">Selected columns (1)</div>
                        <div className="mt-4 space-y-2">
                            <div className="pl-6 py-2 bg-gray-50 border border-gray-200 rounded-sm">Name</div>
                            <div className="pl-2 py-2 bg-gray-50 border border-gray-200 rounded-sm flex items-center">
                                <RxDragHandleDots2 className="text-lg mr-1" />
                                Email
                            </div>
                            <div className="pl-2 py-2 bg-gray-50 border border-gray-200 rounded-sm flex items-center">
                                <RxDragHandleDots2 className="text-lg mr-1" />
                                Job Title
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center px-4 pb-4 pt-2">
                    <button
                        type="button"
                        className="ml-2 px-8 py-2 mr-3 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        className="px-8 py-2 mr-3 text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    >
                        Cancel
                    </button>
                    <span className="text-sky-600 cursor-pointer font-semibold mr-3">Hide all columns</span>
                </div>
            </div>
        </section>
    );
}
