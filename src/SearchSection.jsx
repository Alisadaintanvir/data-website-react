import { X, Search, Filter } from 'lucide-react';
import { useState } from 'react';
import LeadSearch from './LeadSearch';

export default function SearchSection(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleVisibility = () => {
        setIsOpen(!isOpen);
      };

    return(
        <div className='bg-gray-50 -full'>
        <nav className="flex justify-between items-center px-4 py-3 bg-white shadow-sm border-b border-gray-200">
        <div id="second-section-header" className="hidden lg:flex text-2xl font-semibold ml-4">Search</div>
        <div className="flex mx-3">



          <div className=' sm:ml-0 ml-[250px]'><Filter size={20} onClick={toggleVisibility} className='sm:hidden cursor-pointer mt-2 text-lg'/></div>
          
          
          <div  className={`absolute sm:flex w-full sm:w-auto top-0 left-0 p h-full sm:relative bg-white transition-all duration-300 ${
            isOpen ? 'block' : 'hidden'
          }`}>
          
            <div className=' px-4 mb-4 sm:hidden py-4 text-xl bg-sky-600 text-white'>
              <div className='flex justify-between'><div className=''>Filter</div><X onClick={toggleVisibility} className='cursor-pointer'/></div>
              
            </div>
            <div  className="text-[13px] mx-4 sm:mx-0 sm:mr-0 sm:border border-gray-400 py-4 sm:py-[5px] px-4 w-24 text-center rounded-l-[2px] cursor-pointer hover:bg-sky-100 sm:hover:bg-white sm:hover:text-sky-500 hover:border-blue-500 transition-colors duration-500">Leads</div>
            <div className="text-[13px] mx-4 sm:mx-0 sm:mr-3 sm:border-y sm:border-r border-gray-400 py-4 sm:py-[5px] px-4 w-24 text-center rounded-r-[2px] cursor-pointer hover:bg-sky-100 sm:hover:bg-white sm:hover:text-sky-500 hover:border-blue-500 transition-colors duration-500">Companies</div>
            <div className="text-[13px] mx-4 sm:mx-0 sm:mr-3 sm:border border-gray-400 py-4 sm:py-[5px] px-4 rounded-[2px] cursor-pointer hover:bg-sky-100 sm:hover:bg-white sm:hover:text-sky-500 hover:border-blue-500 transition-colors duration-500">Saved search</div>
            <div  className="text-[13px] mx-4 sm:mx-0 sm:mr-3 sm:border border-gray-400 py-4 sm:py-[5px] px-4 rounded-[2px] cursor-pointer hover:bg-sky-100 sm:hover:bg-white sm:hover:text-sky-500 hover:border-blue-500 transition-colors duration-500">Recent activity</div>

          </div>
          </div>
      </nav>


            <LeadSearch className="h-[100vh]"/>


        </div>
    );
}