import { MailCheck, Eye, PackagePlus, Save, Database, ArrowDownToLine, Forward, ChevronDown, Lock, ArrowDownNarrowWide } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const LeadTable = () => {
  const [isSelectVisible, setIsSelectVisible] = useState(false);
  const [isAdvanceVisible, setIsAdvanceVisible] = useState(true);
  const ref = useRef(null);
  const dropdownRef = useRef(null);
  const toggleRef = useRef(null);

  const handleSelectClick = (event) => {
    event.stopPropagation(); // Prevents the event from propagating
    setIsSelectVisible(!isSelectVisible);
  };

  const handleAdvanceClick = () => {
    setIsAdvanceVisible(!isAdvanceVisible);
  };

  const handleClickOutside = (event) => {
    // Check if click is outside the dropdown and toggle button
    if (
      (dropdownRef.current && !dropdownRef.current.contains(event.target)) &&
      (toggleRef.current && !toggleRef.current.contains(event.target))
    ) {
      setIsSelectVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


    const [numberPeopleValue, setPeopleNumberValue] = useState(0);
    const [numberCompanyValue, setCompanyNumberValue] = useState(0);
  
    const handlePeopleChange = (e) => {
      setPeopleNumberValue(e.target.value);
    };

    const handleCompanyChange = (e) => {
      setCompanyNumberValue(e.target.value);
    };

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
        <div className='flex items-center'>
          <button
            onClick={(e) => handleSelectClick(e)}
            ref={toggleRef}
            className='toggle-button flex relative cursor-pointer items-center h-6 justify-center bg-gray-200 ml-2 mr-4 rounded-sm'
          >
            <input type="checkbox" className="lead-checkbox-all ml-[4px]" />
            <ChevronDown size={18} className='ml-[2px] mr-[1px]'/>
          </button>

          {isSelectVisible && (
            <div
              ref={dropdownRef}
              className='select-options absolute bg-white shadow-md top-48 left-52 w-72 font-semibold text-md'
            >
              <div className='py-2 mt-2 border-b px-4'>Select this page</div>
              <div className='py-2 border-b px-4 flex justify-between items-center'>
                <span>
                  <span>Select all people </span>
                  <span>(25)</span>
                </span>
                <Lock size={15}/>
              </div>
              <div onClick={handleAdvanceClick} className='pt-2 pb-3 px-4 cursor-pointer flex justify-between items-center text-blue-500'>
                <span>Advance options</span>
                <ChevronDown size={18}/>
              </div>
              {isAdvanceVisible && 
              <div className='py-2 px-4 '>
                <div className='flex justify-between items-center my-1'>
                  <span>Select number of people</span>
                  <input
                      type="number"
                      value={numberPeopleValue}
                      onChange={handlePeopleChange}
                      className="w-14 px-1 focus:outline-none border border-gray-300 rounded-sm focus:border-blue-500"
                      min="0"  
                      step="1"
                    />
                  
                </div>
                <div className='py-2 flex justify-between my-1'>
                  <span>
                    <input type='checkbox' className='mr-2' />
                    <span>Select number of people</span>
                  </span>

                  <input
                      type="number"
                      value={numberCompanyValue}
                      onChange={handleCompanyChange}
                      className="w-14 px-1 focus:outline-none border border-gray-300 rounded-sm focus:border-blue-500"
                      min="0"  
                      step="1"
                    />
                </div>
                <button className='bg-blue-500 mt-1 mb-2 text-white px-2 py-1 rounded-sm w-full'>Apply selection</button>
              </div>}
            </div>
          )}

          <span className='border-l cursor-pointer'>
            <span className='btn bg-blue-500 text-white rounded px-3 py-1 ml-4 flex items-center'>
              <ArrowDownToLine size={17} className='mr-2'/><span className="">Save all</span>
            </span>
          </span>
        </div>

        <div className='flex'>

        <div className="share flex mr-2">
          <span className='btn cursor-pointer py-1 pl-2 pr-3 flex items-center  border border-gray-300 rounded-sm font-semibold'>
          <Forward size={17} className='mr-1'/><span className="">Share</span>
          </span>
        </div>


        <div className="layout flex mr-2">
          <span className='btn cursor-pointer py-1 pl-2 pr-3 flex items-center  border border-gray-300 rounded-sm font-semibold'>
          <Eye size={16} className='mr-1 mt-[2px]'/><span className="">Layout</span><ChevronDown size={17} className='ml-3 mt-[2px]'/>
          </span>
        </div>

        <div className="relevance flex mr-2">
          <span className='btn cursor-pointer py-1 pl-2 pr-3 flex items-center  border border-gray-300 rounded-sm font-semibold'>
          <ArrowDownNarrowWide size={16} className='mr-1 mt-[2px]'/><span className="my-auto">Relevance</span><ChevronDown size={17} className='ml-2 mt-[2px]'/>
          </span>
        </div>
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
