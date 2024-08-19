import { MailCheck, PhoneOutgoing, ChevronsUpDown, Link, Linkedin, Facebook, Twitter } from 'lucide-react';
import myImage from '../public/vite.svg';


export default function LeadTable() {
  return (
    <div className="lead-table-div overflow-x-scroll border border-gray-300">
      <table className="lead-table text-left bg-white min-w-[1500px] table-fixed text-gray-800">
        <thead className="border-b text-xs">
          <tr>
            <th className="pl-4 py-2 font-normal w-[200px] sticky left-0 bg-white z-10">
                <div className='flex items-center'>
                <span>Name</span><ChevronsUpDown size={14} className=' ml-1 text-gray-500'/>
                </div>
            </th>
            <th className="pl-4 py-2 font-normal w-[180px]">
                <div className='flex items-center'>
                <span>Company</span><ChevronsUpDown size={14} className=' ml-1 text-gray-500'/>
                </div>
            </th>
            <th className="pl-4 py-2 font-normal w-[180px]">
                <div className='flex items-center'>
                <span>Email</span><ChevronsUpDown size={14} className='cursor-pointer ml-1 text-gray-500'/>
                </div>
            </th>
            <th className="pl-4 py-2 font-normal w-[180px]">
                <div className='flex items-center'>
                <span>Phone</span><ChevronsUpDown size={14} className='cursor-pointer ml-1 text-gray-500'/>
                </div>
            </th>
            <th className="pl-4 py-2 font-normal w-[180px]">
                <div className='flex items-center'>
                <span>Location</span><ChevronsUpDown size={14} className='cursor-pointer ml-1 text-gray-500'/>
                </div>
            </th>
            <th className="pl-4 py-2 font-normal w-[180px]">
                <div className='flex items-center'>
                <span>Employees</span><ChevronsUpDown size={14} className='cursor-pointer ml-1 text-gray-500'/>
                </div>
            </th>
            <th className="pl-4 py-2 font-normal w-[180px]">
                <div className='flex items-center'>
                <span>Industry</span><ChevronsUpDown size={14} className='cursor-pointer ml-1 text-gray-500'/>
                </div>
            </th>
            <th className="pl-4 py-2 font-normal w-[180px]">
                <div className='flex items-center'>
                <span>Keywords</span><ChevronsUpDown size={14} className='cursor-pointer ml-1 text-gray-500'/>
                </div>
            </th>
          </tr>
        </thead>
        <tbody className=''>
          {[1, 2].map((row) => (
            <tr key={row} className="hover:bg-gray-50 group text-[14px]">
              <td className="py-3 pr-4 border-y whitespace-nowrap sticky left-0 bg-white group-hover:bg-gray-50 z-10 shadow">
                <div className="contact-row flex items-center justify-between">
                  <div className="flex items-center">
                    <input type="checkbox" className="lead-checkbox ml-2 mr-4" />
                    <div className="contact-info flex">
                      <div className="flex items-start mt-1 mr-2">
                        <span className='bg-blue-500 flex justify-center items-center text-white text-xs h-7 w-7 rounded-full'>BR</span>
                      </div>
                      <div className="contact-name">
                        <span className="item-name-lead font-semibold mr-2">
                          Brian Regienczuk
                        </span>
                        <br/>
                        <span className="item-name-lead text-[14px] mr-2">
                          Web Developer
                        </span>
                      </div>
                      <div className='bg-gray-600 transition-colors delay-75 hover:bg-blue-600 text-white text-xs mt-[5px] cursor-pointer text-center h-[15px] w-[15px] rounded-sm font-semibold'>in</div>
                    </div>
                  </div>
                </div>
              </td>

              <td className="py-3 border-b text-gray-800 font-semibold whitespace-nowrap">
              <div className='flex items-start'>
                <img src={myImage} className='w-5 mr-2 mt-1'></img>
              <div className='ml-2'>
              <div className=''>Tic limited</div>
              <div className='flex'><Link size={19} className='pt-1 mr-1 text-blue-500 hover:text-blue-700 cursor-pointer'/><Linkedin size={19} className='pt-1 mr-1 text-blue-500 hover:text-blue-700 cursor-pointer'/> <Facebook size={19} className='pt-1 mr-1 text-blue-500 hover:text-blue-700 cursor-pointer'/><Twitter size={19} className='pt-1 mr-1 text-blue-500 hover:text-blue-700 cursor-pointer'/></div>
              </div>
              
              </div>
              </td>
              <td className="py-3 border-b whitespace-nowrap">
                <div className="show-email">
                  <button
                    type="button"
                    className="show-email-btn flex items-center text-sm text-gray-700 font-medium px-2 py-1 rounded-sm border border-gray-300"
                  >
                    <MailCheck size={16} className='mr-[7px] text-blue-600 text-[14px]'/><span>Show email</span>
                  </button>
                </div>
              </td>
              <td className="py-3 border-b whitespace-nowrap">
                <button
                  type="button"
                  className="show-email-btn flex items-center text-sm text-gray-700 font-medium px-2 py-1 rounded-sm border border-gray-300"
                >
                  <PhoneOutgoing size={16} className='mr-[7px] text-blue-600 text-[14px]'/><span>Show phone</span>
                </button>
              </td>
              <td className="py-3 border-b whitespace-nowrap">New York</td>
              <td className="py-3 border-b whitespace-nowrap">12300</td>
              <td className="py-3 border-b whitespace-nowrap">Technology</td>
              <td className="py-3 border-b whitespace-nowrap">Tic</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
