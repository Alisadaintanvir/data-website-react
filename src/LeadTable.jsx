import { MailCheck, PackagePlus, Save, Database, ArrowDownToLine, Forward } from 'lucide-react';

const LeadTable = () => {
  return (
    <div className="right-company-section w-full mt-4 mx-4">
    <div className="lead-head flex justify-between items-center px-2 pb-3">
        <div className="flex space-x-5 items-center font-medium text-[15px] text-gray-600">
          <span className="total-leads font-normal flex"><PackagePlus size={21} className='mr-2 text-blue-500'/><span>New (6,000)</span></span>
          <span className="total-leads font-normal flex"><Save size={20} className='mr-2 text-blue-500'/><span>Saved (1,23)</span></span>
          <span className="total-leads font-normal flex"><Database size={20} className='mr-2 text-blue-500'/><span>Total (56,000)</span></span>
        </div>
        
      </div>

      <div className="lead-head flex justify-between items-center bg-white border-x border-t px-2 py-2">
        
        
        <div className='flex'>
        <input type="checkbox" className="lead-checkbox-all ml-2 mr-4" />
        <span className='border-l cursor-pointer'>
            <span className='btn bg-blue-500 text-white rounded px-3 py-1 ml-4 flex items-center'><ArrowDownToLine size={17} className='mr-2'/><span className="">
                Save all
            </span>
          </span>
          </span>
        </div>
        <div className="flex">

            <span className='btn cursor-pointer px-3 flex items-center mr-2 border border-gray-300 rounded-sm font-semibold'><span className="">
                Share</span><Forward size={17} className='ml-1'/>
          </span>


          <input
            className="search-br border rounded p-1"
            type="text"
            placeholder="Search..."
          />
          
          </div>
       
      </div>

      <div className="lead-table-div overflow-auto w-full">
        <table className="lead-table text-left bg-white">
          <thead className="border">
            <tr className=' '>
              <th className="first_name p-2 font-normal text-[13px]">Name</th>
              <th className="p-2 font-normal text-[13px]">Title</th>
              <th className="p-2 font-normal text-[13px]">Company</th>
              <th className="p-2 font-normal text-[13px]">Email</th>
              <th className="p-2 font-normal text-[13px]">Phone</th>
              <th className="p-2 font-normal text-[13px]">Phone</th>
              <th className="p-2 font-normal text-[13px]">Phone</th>
              <th className="p-2 font-normal text-[13px]">Phone</th>
              <th className="p-2 font-normal text-[13px]">Company</th>
            </tr>
          </thead>
          <tbody className='h-[100px] w-[100px]'>
            {[1, 2].map((row) => (
              <tr key={row} className="hover:bg-gray-50">

                <td className="p-2 border text-gray-800">
  
                  <div className="contact-row flex items-center justify-between">
                  
                    <div className="flex items-center">
                    <input type="checkbox" className="lead-checkbox ml-2 mr-4" />
  
                      <div className="contact-info flex">
                        <div className="contact-name">
                          <span className="item-name-lead text-[14px] font-semibold">
                            Brian Regienczuk
                          </span>
                          <div className='bg-gray-500 text-white text-xs mt-2 text-center h-[18x] w-[15px] rounded-sm font-semibold'>in</div>
                        </div>

                      </div>
                    </div>

                  </div>
                </td>
                <td className="p-2 border ">
                    <div className="show-email">
                        <button
                        type="button"
                        className="show-email-btn flex items-center text-sm text-gray-700 font-medium px-2 py-1 rounded-sm border border-gray-300"
                        >
                        <MailCheck size={16} className='mr-[7px] text-green-600'/><span>Show email</span>
                        </button>
                    </div>
                </td>
                <td className="p-2 border">
                  <div className="company-row flex items-center justify-between">
                    <div className="flex items-center">

                      <div className="contact-info">
                        <div className="contact-name">
                          <span className="item-name-lead text-base font-semibold">
                            Brian Regienczuk
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadTable;
