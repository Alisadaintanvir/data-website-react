import { Eye, PackagePlus, Save, Database, ArrowDownToLine, Forward, ChevronDown, Lock, ArrowDownNarrowWide } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import SelectOptions from './SelectOptions';
import LayoutDown from './LayoutDown';
import LeadTable from './LeadTable';
import RelevanceDown from './RelevanceDown';
import Pagination from './Pagination'

const LeadRightSec = () => {
  const [isSelectVisible, setIsSelectVisible] = useState(false);
  const [isAdvanceVisible, setIsAdvanceVisible] = useState(true);
  const [isLayoutVisible, setIsLayoutVisible] = useState(false);
  const [isRelevanceVisible, setIsRelevanceVisible] = useState(false);

  const dropdownRef = useRef(null);
  const toggleRef = useRef(null);
  const layoutRef = useRef(null);
  const relevanceRef = useRef(null);
  const layoutToggleRef = useRef(null);
  const relevanceToggleRef = useRef(null);

  const handleSelectClick = (event) => {
    event.stopPropagation();
    setIsSelectVisible((prev) => !prev);
  };

  const handleAdvanceClick = () => {
    setIsAdvanceVisible(!isAdvanceVisible);
  };

  const handleLayoutClick = (event) => {
    event.stopPropagation();
    setIsLayoutVisible((prev) => !prev);
  };

  const handleRelevanceClick = (event) => {
    event.stopPropagation();
    setIsRelevanceVisible((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !toggleRef.current.contains(event.target)
    ) {
      setIsSelectVisible(false);
    }

    if (
      layoutRef.current &&
      !layoutRef.current.contains(event.target) &&
      !layoutToggleRef.current.contains(event.target)
    ) {
      setIsLayoutVisible(false);
    }

    if (
      relevanceRef.current &&
      !relevanceRef.current.contains(event.target) &&
      !relevanceToggleRef.current.contains(event.target)
    ) {
      setIsRelevanceVisible(false);
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
        <div className='lead-click-advance flex items-center'>
          <button
            onClick={(e) => handleSelectClick(e)}
            ref={toggleRef}
            className='toggle-button flex relative cursor-pointer items-center h-6 justify-center bg-gray-200 ml-2 mr-4 rounded-sm'
          >
            <input type="checkbox" className="lead-checkbox-all ml-[4px]" />
            <ChevronDown size={18} className='ml-[2px] mr-[1px]'/>
          </button>

          {isSelectVisible && (
            <SelectOptions
              dropdownRef={dropdownRef}
              isAdvanceVisible={isAdvanceVisible}
              handleAdvanceClick={handleAdvanceClick}
              numberPeopleValue={numberPeopleValue}
              handlePeopleChange={handlePeopleChange}
              numberCompanyValue={numberCompanyValue}
              handleCompanyChange={handleCompanyChange}
            />
          )}

          <span className='border-l cursor-pointer'>
            <span className='btn bg-blue-500 text-white rounded px-3 py-1 ml-4 flex items-center'>
              <ArrowDownToLine size={17} className='mr-2'/><span className="">Save all</span>
            </span>
          </span>
        </div>

        <div className='flex'>
          <div className="share flex mr-2">
            <span className='btn cursor-pointer py-1 pl-2 pr-3 flex items-center border border-gray-300 hover:border-blue-500 hover:text-blue-500 rounded-sm font-semibold'>
              <Forward size={17} className='mr-1'/><span className="">Share</span>
            </span>
          </div>

          {/* Layout Toggle Button */}
          <div className="layout flex mr-2 relative">
            <span
              onClick={handleLayoutClick}
              ref={layoutToggleRef}
              className='btn cursor-pointer py-1 pl-2 pr-3 flex items-center border border-gray-300 hover:border-blue-500 hover:text-blue-500 rounded-sm font-semibold'
            >
              <Eye size={16} className='mr-1 mt-[2px]'/><span className="">Layout</span><ChevronDown size={17} className='ml-3 mt-[2px]'/>
            </span>
          </div>

          {isLayoutVisible && (
            <LayoutDown ref={layoutRef} />
          )}

          <div 
          onClick={handleRelevanceClick}
          ref={relevanceToggleRef}
          className="relevance flex mr-2">
            <span className='btn cursor-pointer py-1 pl-2 pr-3 flex items-center border border-gray-300 hover:border-blue-500 hover:text-blue-500 rounded-sm font-semibold'>
              <ArrowDownNarrowWide size={16} className='mr-1 mt-[2px]'/><span className="my-auto">Relevance</span><ChevronDown size={17} className='ml-2 mt-[2px]'/>
            </span>
          </div>


          {isRelevanceVisible && (
            <RelevanceDown ref={relevanceRef} />
          )}

        </div>
      </div>

      <LeadTable/>

      <Pagination/>

      
    </div>
  );
};

export default LeadRightSec;
