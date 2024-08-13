import './Contacts.css'
import './scrollbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GoTriangleLeft, GoTriangleDown, GoTriangleRight } from "react-icons/go";
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { X, Search, Filter } from 'lucide-react';

const Contacts = ({ toggleSec, toggleCreateNewProperty, toggleCreateNewContact, toggleExport }) => {
  const [page, setPage] = useState(1);

  const handlePageChange = (e) => {
    setPage(e.target.value);
  };

  const [isOpen, setIsOpen] = useState(false);


    const toggleVisibility = () => {
      setIsOpen(!isOpen);
    };


  return (
    <>

    

      {/* Contacts Section */}
      <section id="contacts-section" className='overflow-hidden'>
        <nav className="flex justify-between items-center px-4 py-3 bg-white shadow border-b border-gray-200">
          <div id="second-section-header" className="hidden lg:flex text-xl font-semibold">All Contacts</div>
          <div className="flex mx-3">

            <div className="sm:relative md:w-52 mb-2 md:mb-0 mr-3 w-full">
              <input placeholder="Search contact" className="block w-[150px] lg:w-full px-2 py-[5px] border border-gray-300 rounded-md" type="text" />
              <span className="absolute lg:right-2 top-[77px] left-[152px] lg:left-auto lg:top-1/2 transform -translate-y-1/2">
              <Search size={16}  className='text-xs text-gray-400'/>
              </span>
            </div>

            <div className=' sm:ml-0 ml-[250px]'><Filter size={20} onClick={toggleVisibility} className='sm:hidden cursor-pointer mt-2 text-lg'/></div>
            
            
            <div  className={`absolute sm:flex w-full sm:w-auto top-0 left-0 p h-full sm:relative bg-white transition-all duration-300 ${
              isOpen ? 'block' : 'hidden'
            }`}>
            
              <div className=' px-4 mb-4 sm:hidden py-4 text-xl bg-sky-600 text-white'>
                <div className='flex justify-between'><div className=''>Filter</div><X onClick={toggleVisibility} className='cursor-pointer'/></div>
                
              </div>
              <div onClick={toggleSec} className="text-[13px] mx-4 sm:mx-0 sm:mr-3 sm:border border-gray-300 py-4 sm:py-[5px] px-4 rounded-[4px] shadow-sm cursor-pointer hover:bg-sky-100 sm:hover:bg-white sm:hover:text-sky-500 hover:border-sky-500 transition-colors duration-500">Edit Columns</div>
              <div onClick={toggleCreateNewProperty} className="text-[13px] mx-4 sm:mx-0 sm:mr-3 sm:border border-gray-300 py-4 sm:py-[5px] px-4 rounded-[4px] shadow-sm cursor-pointer hover:bg-sky-100 sm:hover:bg-white sm:hover:text-sky-500 hover:border-sky-500 transition-colors duration-500">Create Property</div>
              <Link to='/import' className="text-[13px] mx-4 sm:mx-0 sm:mr-3 sm:border border-gray-300 py-4 sm:py-[5px] px-4 rounded-[4px] shadow-sm cursor-pointer hover:bg-sky-100 sm:hover:bg-white sm:hover:text-sky-500 hover:border-sky-500 transition-colors duration-500">Import</Link>
              <div onClick={toggleExport} className="text-[13px] mx-4 sm:mx-0 sm:mr-3 sm:border border-gray-300 py-4 sm:py-[5px] px-4 rounded-[4px] shadow-sm cursor-pointer hover:bg-sky-100 sm:hover:bg-white sm:hover:text-sky-500 hover:border-sky-500 transition-colors duration-500">Export</div>
              <div onClick={toggleCreateNewContact} className="text-[13px] mx-4 sm:mx-0 sm:mr-3 sm:border border-gray-300 py-4 sm:py-[5px] px-4 rounded-[4px] shadow-sm cursor-pointer hover:bg-sky-100 sm:hover:bg-white sm:hover:text-sky-500 hover:border-sky-500 transition-colors duration-500">Create Contact</div>
            </div>
            </div>
        </nav>

        <div id="contacts-section-div" className="flex bg-[#f7f8fa] overflow-y-hidden">
          <div className="w-[270px] py-4 pl-3 hidden sm:block">
            <div className="overflow-y-scroll">
              <div className="font-semibold hover:bg-sky-100 hover:text-sky-400 transition-colors duration-300 py-3 px-3 rounded-sm cursor-pointer">My Contacts</div>
              <div className="font-semibold hover:bg-sky-100 hover:text-sky-400 transition-colors duration-300 py-3 px-3 rounded-sm cursor-pointer">All Emails</div>
              <div className="font-semibold hover:bg-sky-100 hover:text-sky-400 transition-colors duration-300 py-3 px-3 rounded-sm cursor-pointer">Valid Emails</div>
              <div className="font-semibold hover:bg-sky-100 hover:text-sky-400 transition-colors duration-300 py-3 px-3 rounded-sm cursor-pointer">Accept All Emails</div>
              <div className="font-semibold hover:bg-sky-100 hover:text-sky-400 transition-colors duration-300 py-3 px-3 rounded-sm cursor-pointer">No Emails</div>
              <div className="font-semibold hover:bg-sky-100 hover:text-sky-400 transition-colors duration-300 py-3 px-3 rounded-sm cursor-pointer">No List</div>
              <div className="font-semibold hover:bg-sky-100 hover:text-sky-400 transition-colors duration-300 py-3 px-3 rounded-sm cursor-pointer">All Saved Views</div>
              <div className="mt-4">
                <div className="font-semibold hover:bg-sky-100 hover:text-sky-400 transition-colors duration-300 py-2 px-3 rounded-sm cursor-pointer">Filter</div>
                <div className="font-semibold hover:bg-sky-100 hover:text-sky-400 transition-colors duration-300 py-2 px-3 rounded-sm cursor-pointer">Add Filter</div>
              </div>
              <div className="mt-4">
                <div className="font-semibold hover:bg-sky-100 hover:text-sky-400 transition-colors duration-300 py-2 px-3 rounded-sm cursor-pointer">Recent Lists</div>
                <div className="font-semibold hover:bg-sky-100 hover:text-sky-400 transition-colors duration-300 py-2 px-3 rounded-sm cursor-pointer">Abc</div>
              </div>
            </div>
          </div>

          <div className="mx-4 w-full py-4 h-[100%] overflow-y-hidden" >
          <div  className='overflow-x-scroll'>
            <table className="border border-gray-300 bg-white w-[1700px]">
              <thead className="">
                <tr>
                  <th className="border w-20 pl-5">
                    <input type="checkbox" className=''/>
                  </th>
                  <th className="border">Name</th>
                  <th className="border">Email</th>
                  <th className="border">Job Title</th>
                  <th className="border">Company</th>
                  <th className="border">Location</th>
                  <th className="border">Created at</th>
                  <th className="border">Source</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border w-20 pl-5">
                    <input type="checkbox" />
                  </td>
                  <td className="border">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-200 text-green-800 rounded-full flex items-center justify-center mr-2">BR</div>
                      <span>Brian Regienczuk</span>
                    </div>
                  </td>
                  <td className="border">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-green-500" />
                      <span>brian@gmail.com</span>
                    </div>
                  </td>
                  <td className="border">CEO</td>
                  <td className="border">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-200 text-green-800 rounded-full flex items-center justify-center mr-2">BR</div>
                      <span>Brian Regienczuk</span>
                    </div>
                  </td>
                  <td className="border">Location</td>
                  <td className="border">Created at</td>
                  <td className="border">Source</td>
                </tr>

                <tr>
                  <td className="border w-20 pl-5">
                    <input type="checkbox" />
                  </td>
                  <td className="border">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-200 text-green-800 rounded-full flex items-center justify-center mr-2">BR</div>
                      <span>Brian Regienczuk</span>
                    </div>
                  </td>
                  <td className="border">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-green-500" />
                      <span>brian@gmail.com</span>
                    </div>
                  </td>
                  <td className="border">CEO</td>
                  <td className="border">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-200 text-green-800 rounded-full flex items-center justify-center mr-2">BR</div>
                      <span>Brian Regienczuk</span>
                    </div>
                  </td>
                  <td className="border">Location</td>
                  <td className="border">Created at</td>
                  <td className="border">Source</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
            </div>

            <div className="mt-4 flex space-x-1 justify-center items-center text-gray-700">
              <span className="cursor-pointer p-1 px-2 py-1 bg-white text-center hover:text-sky-500 border hover:border-sky-500 rounded-sm transition-colors duration-300"><GoTriangleLeft className='text-lg' /></span>
              <span className="flex border rounded-sm bg-white items-center hover:border-sky-500 transition-colors duration-300"><input className="w-8 py-[3px] px-2 rounded-md" type="text" value={page}
              onChange={handlePageChange} /><GoTriangleDown className='text-lg w-8 cursor-pointer' /></span>
              <span className="cursor-pointer p-1 px-2 py-1 bg-white text-center hover:text-sky-500 border hover:border-sky-500 rounded-sm transition-colors duration-300"><GoTriangleRight className='text-lg' /></span>

            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Contacts;
