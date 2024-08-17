import { MailCheck, PhoneOutgoing, ChevronsUpDown } from 'lucide-react';

export default function LeadTable() {
  return (
    <div className="lead-table-div overflow-x-auto w-[1017px] border border-gray-300">
      <table className="lead-table text-left bg-white min-w-[1500px] table-fixed text-gray-800">
        <thead className="border-b">
          <tr>
            <th className="pl-4 font-normal text-xs w-[200px] sticky left-0 bg-white z-10">
                <div className='flex items-center'>
                <span>Name</span><ChevronsUpDown size={14} className=' ml-1 text-gray-500'/>
                </div>
            </th>
            <th className="pl-4 font-normal text-xs w-[180px]">
                <div className='flex items-center'>
                <span>Company</span><ChevronsUpDown size={14} className=' ml-1 text-gray-500'/>
                </div>
            </th>
            <th className="pl-4 font-normal text-xs w-[180px]">
                <div className='flex items-center'>
                <span>Email</span><ChevronsUpDown size={14} className='cursor-pointer ml-1 text-gray-500'/>
                </div>
            </th>
            <th className="pl-4 font-normal text-xs w-[180px]">
                <div className='flex items-center'>
                <span>Phone</span><ChevronsUpDown size={14} className='cursor-pointer ml-1 text-gray-500'/>
                </div>
            </th>
            <th className="pl-4 font-normal text-xs w-[180px]">
                <div className='flex items-center'>
                <span>Location</span><ChevronsUpDown size={14} className='cursor-pointer ml-1 text-gray-500'/>
                </div>
            </th>
            <th className="pl-4 font-normal text-xs w-[180px]">
                <div className='flex items-center'>
                <span>Employees</span><ChevronsUpDown size={14} className='cursor-pointer ml-1 text-gray-500'/>
                </div>
            </th>
            <th className="pl-4 font-normal text-xs w-[180px]">
                <div className='flex items-center'>
                <span>Industry</span><ChevronsUpDown size={14} className='cursor-pointer ml-1 text-gray-500'/>
                </div>
            </th>
            <th className="pl-4 font-normal text-xs w-[180px]">
                <div className='flex items-center'>
                <span>Keywords</span><ChevronsUpDown size={14} className='cursor-pointer ml-1 text-gray-500'/>
                </div>
            </th>
          </tr>
        </thead>
        <tbody className=''>
          {[1, 2].map((row) => (
            <tr key={row} className="hover:bg-gray-50 group">
              <td className="py-3 border-y whitespace-nowrap sticky left-0 bg-white group-hover:bg-gray-50 z-10 shadow">
                <div className="contact-row flex items-center justify-between">
                  <div className="flex items-center">
                    <input type="checkbox" className="lead-checkbox ml-2 mr-4" />
                    <div className="contact-info flex">
                      <div className="flex items-start mt-2 mr-2">
                        <span className='bg-blue-300 flex justify-center items-center text-white text-xs h-6 w-6 rounded-full'>BR</span>
                      </div>
                      <div className="contact-name">
                        <span className="item-name-lead text-[14px] font-semibold mr-2">
                          Brian Regienczuk
                        </span>
                        <br/>
                        <span className="item-name-lead text-[14px] mr-2">
                          Web Developer
                        </span>
                      </div>
                      <div className='bg-blue-600 text-white text-xs mt-1 text-center h-[15px] w-[15px] rounded-sm font-semibold'>in</div>
                    </div>
                  </div>
                </div>
              </td>

              <td className="py-3 border-b text-gray-800 font-semibold whitespace-nowrap">
              <div className='flex'>
                <img src='./vite.svg' className='w-5'></img>
              <span className='ml-2'>Tic limited</span>
              </div>
              </td>
              <td className="py-3 border-b whitespace-nowrap">
                <div className="show-email">
                  <button
                    type="button"
                    className="show-email-btn flex items-center text-sm text-gray-700 font-medium px-2 py-1 rounded-sm border border-gray-300"
                  >
                    <MailCheck size={16} className='mr-[7px] text-green-600'/><span>Show email</span>
                  </button>
                </div>
              </td>
              <td className="py-3 border-b whitespace-nowrap">
                <button
                  type="button"
                  className="show-email-btn flex items-center text-sm text-gray-700 font-medium px-2 py-1 rounded-sm border border-gray-300"
                >
                  <PhoneOutgoing size={16} className='mr-[7px] text-green-600'/><span>Show phone</span>
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
